const joi = require("joi")
const { nuevoUsuario } = require("./userControlles")

const validator = (req, res, next) => {
    console.log(req.body.NuevoUsuario)
    const Schema = joi.object({
        name: joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({ //trim espacios post o ant
            "string.min": "The name must minimally have 3 characters",
            "string.empty": "El field name can not be empty"
        }),
        lastName: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({ //trim espacios post o ant
            "string.min": "The Last name must minimally have 20 characters",
            "string.empty": "El field Last Name can not be empty"
        }),
        email: joi.string().email({minDomainSegments:2}).required().messages({
            "string.email": "The format mail is not correct"          
        }),
        password: joi.string().max(20).min(6).trim().pattern(new RegExp("[a-zA-Z-09]")).required().messages({ //trim espacios post o ant
            "string.min": "The password must minimally have 3 characters",
            "string.pattern": "The password must have number and leters"
        }),
    })
    const validation = Schema.validate(req.body.NuevoUsuario, {abortEarly:false })

    if(validation.error){
        return res.json({success:"falseVAL", response:validation})
    }
    next()
}
module.exports = validator 
