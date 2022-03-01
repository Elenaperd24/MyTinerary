const mongoose = require('mongoose') //va a almacenar los datos

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
})
const User = mongoose.model("user", userSchema)

module.exports = User;  