const Router = require ('express').Router()
const datosController = require('../controller/datosControlles')
const {obtenerDatos , obtenerItineraries} = datosController //desestructuracion


Router.route('/datos')
.get(obtenerDatos)

Router.route('/infoitinerary/:city')
.get(obtenerItineraries)

module.exports = Router