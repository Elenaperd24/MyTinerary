const Router = require ('express').Router()
const datosController = require('../controller/datosControlles')

const {obtenerDatos , obtenerItineraries, obtenerUser} = datosController //desestructuracion
const userController = require("../controller/userControlles.js")
const validator = require("../controller/validador")
const {nuevoUsuario, verifyEmail , accesUser, cerrarSesion} = userController

Router.route('/datos')
.get(obtenerDatos)

Router.route('/infoitinerary/:city')
.get(obtenerItineraries)

Router.route("/signup")
.post(validator, nuevoUsuario)

Router.route("/verify/:uniqueString")
.get(verifyEmail)

Router.route("/signin")
.post(accesUser)

Router.route("/signout")
.post(cerrarSesion)


module.exports = Router