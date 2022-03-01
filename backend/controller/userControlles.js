const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")


const userControllers = {

    nuevoUsuario: async (req, res) => {

        const { name, lastName, email, password } = req.body.NuevoUsuario // destructurar agarramos un objeto y sus variables las podemos trabajar por separado
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste) {
                res.json({ success: "falseUE", response: "User already Regitred, go to Signin" })
            }
            else {
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    name,
                    lastName,
                    email,
                    password: passwordHash
                })
                await newUser.save()
                res.json({sucess:"trueUE", response:"User has been create"})
            }
        }
        catch(error){res.json({success:"falseUE", response: null, error:error})}
    }
}
module.exports = userControllers