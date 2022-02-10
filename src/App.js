import React from 'react' //IMPORTO PAQUETES DE REACT
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

  const data=[]


  axios.get("http://localhost:4000/api/datos")
    .then(response => data.push(...response.data.response.cities))
    console.log(data);
    /* data.push(...response.data.response.cities)) */
   
  /* console.log(data) */


  const dataItinerary=[]
  axios.get("http://localhost:4000/api/infoitinerary")
  .then(response => dataItinerary.push(...response.data.response.itinerary))
  console.log(dataItinerary);
   
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cities" element={<Cities data={data}/>} />
        <Route path="/city" element={<City data={data} dataItinerary={dataItinerary}/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/singup" element={<SignUp data={data} />} />
        <Route path="/prueba" element={<Prueba/>}/>
      </Routes> 
      <Footer />
    </BrowserRouter>
  )
}
export default App;