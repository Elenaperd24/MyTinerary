const Router = require ('express').Router()
const citiesController = require('../controller/datosControlles')
const {obtenerDatos , obtenerItineraries} = citiesController //desestructuracion


Router.route('/datos')
.get(obtenerDatos)

Router.route('/infoitinerary')
.get(obtenerItineraries)

module.exports = Router