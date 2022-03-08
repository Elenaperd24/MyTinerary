const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


async function sendEmail(email, uniqueString) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "elena.study2022@gmail.com",
            pass: process.env.NODEMAILER
        }
    })
    const sender = "elena.study2022@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "User verification",
        html: `Press <a href=http://localhost:4000/api/verify/${uniqueString}>here</a>Para validar tu email`
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Message sent");
        }
    })

}

const userControllers = {

    verifyEmail: async (req, res) => {
        const { uniqueString } = req.params
        const user = await User.findOne({ uniqueString: uniqueString })
        if (user) {
            user.emailVerified = true
            await user.save()
            res.redirect("http://localhost:3000/signin")
        }
        else {
            res.json({ success: false, response: "your email couldn't be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { name, lastName, email, password, google } = req.body.NuevoUsuario // destructurar agarramos un objeto y sus variables las podemos trabajar por separado
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({ email })
            if (usuarioExiste) {

                if (google) {
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    usuarioExiste.password = passwordHash;
                    usuarioExiste.emailVerified = true
                    usuarioExiste.google = true
                    usuarioExiste.connected = false

                    usuarioExiste.save()
                    res.json({ success: true, from: "google", response: "We update your signin so you can do it with google" })
                }
                else {
                    res.json({ success: false, from: "SignUp", response: "This email is already in use, perform SignIn" })
                }
            }
            else {
                const emailVerified = false
                const uniqueString = crypto.randomBytes(15).toString("hex")
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    name,
                    lastName,
                    email,
                    password: passwordHash,
                    uniqueString,
                    emailVerified,
                    connected: false,
                    google
                })

                if (google) {
                    newUser.emailVerified = true
                        newUser.google = true
                        newUser.connected = false
                        await newUser.save()
                    res.json({ success: true, from: "google", response: "Congratulations we have created your user with google", data: { newUser } })
                }

                else {
                    newUser.emailVerified = false
                    newUser.google = false
                    newUser.connected = false
                    await newUser.save()
                    await sendEmail(email, uniqueString)
                    res.json({ success: "true", from: "SignUp", response: "We have sent an email to your email", data: { newUser } })
                }
            }

        }
        catch (error) { res.json({ success: "false", from: "SignUp", response: null, error: error }) }
    },

    accesUser: async (req, res) => {
        const { email, password } = req.body.UserData

        try {
            const user = await User.findOne({ email })

            if (!user) {
                res.json({ success: false, from: "controller", error: "user or password are incorrect" })
            }
            else {
                if (user.emailVerified) {
                    let passwordCoincide = bcryptjs.compareSync(password, user.password)

                    if (passwordCoincide) {
                        const token = jwt.sign({ ...user }, process.env.SECRETKEY)
                        const datosUser = {
                            name: user.name,
                            lastName: user.lastName,
                            email: user.email,
                            connected: user.connected

                        }
                        user.connected = true
                        await user.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } })
                    }
                    else {
                        res.json({ success: false, from: "controller", error: "user or password are incorret" })
                    }

                }
                else {
                    res.json({ success: false, from: "controller", error: "verify your email or password" })

                }
            }

        }
        catch (error) {
            console.log(error); res.json({ success: false, response: null, error: error })
        }
    },
    cerrarSesion: async (req, res) => {
        const email = req.body.email
        const user = await User.findOne({ email })
        user.connected = false
        await user.save()
        res.json({ success: true, response: "Log Out" })
    }
}


module.exports = userControllers