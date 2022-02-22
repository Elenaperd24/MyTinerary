import React from 'react' //IMPORTO PAQUETES DE REACT
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { accionType } from './reducer';
import { useStateValue } from './StateProvide';

import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Cities from './components/Cities'
import City from './components/City';
import SignUp from './components/SingUp';
import Signin from './components/Signin';
import axios from 'axios'
import Prueba from './components/Prueba';

function App() {
  const [{ cities }, dispatch] = useStateValue()

  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: accionType.CITIESDB,
          cities: response.data.response.cities
        })
      })
    
   /*  axios.get("http://localhost:4000/api/infoitinerary/")
      .then(response => {
        dispatch({
          type: accionType.ITINERARIESDB,
          itineraries: response.data.response.itinerary
        })
      }) */
  }, [])
/* 
  axios.get("https://restcountries.com/v3.1/all%22")
    .then(response => console.log(response))
 */

      /* const dataItinerary = []
      axios.get("http://localhost:4000/api/infoitinerary")
        .then(response => dataItinerary.push(...response.data.response.itinerary))
        console.log(dataItinerary);
    
    
      axios.get("http://localhost:4000/api/infoitinerary")
        .then(response => {
          dispatch({
            type: accionType.ITINERARIESDB,
            itineraries: response.data.response.itinerary
          })
        }) */

      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/city/:id" element={<City />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/singup" element={<SignUp />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
    }
export default App;