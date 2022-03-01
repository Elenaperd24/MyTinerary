const Router = require ('express').Router()
const datosController = require('../controller/datosControlles')
const {obtenerDatos , obtenerItineraries} = datosController //desestructuracion

const userController = require("../controller/userControlles.js")
const validator = require("../controller/validador")
const {nuevoUsuario } = userController

Router.route('/datos')
.get(obtenerDatos)

Router.route('/infoitinerary/:city')
.get(obtenerItineraries)

Router.route("/signup")
.post(validator, nuevoUsuario)

module.exports = Router