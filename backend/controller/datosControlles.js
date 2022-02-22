const Cities = require('../models/cities')
const Itinerary = require('../models/itinerary')

const datosController = {
    obtenerDatos:async (req,resp) => { 
        
        let cities
        let error = null
        try {
            cities = await Cities.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response:error?'ERROR':{cities},
            success:error?false:true,
            error:error
        }) 
    } ,

    obtenerItineraries:async (req,resp) => {       
        let itinerary;
        console.log(req.params);
        const city = req.params.city
        let error = null
        try {
            itinerary = await Itinerary.find({city:city})
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response:error?'ERROR':{itinerary},
            success:error?false:true,
            error:error
        }) 
    } 

   /*  obtenerItineraries:async (req,resp) => {
        
        
        let itinerary;
        let error = null
        try {
            itinerary = await Itinerary.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response:error?'ERROR':{itinerary},
            success:error?false:true,
            error:error
        }) 
    }  */
}

module.exports = datosController
