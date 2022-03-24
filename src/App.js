import React from 'react' //IMPORTO PAQUETES DE REACT
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { accionType } from './reducer';
import { useStateValue } from './StateProvide';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import City from './components/City';
import SignUp from './components/SingUp';
import Signin from './components/Signin';
import axios from 'axios'
import Cities from "./components/Cities";

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

  }, [])

  if(localStorage.getItem("token")!==null){
    const token = localStorage.getItem("token")
    axios.get("http://localhost:4000/api/signinToken", {
      headers:{
        'Authorization':'Bearer '+token
      }
    })
    .then(user=>
   { if(user.data.success){
      dispatch({
        type:accionType.USERDB,
        user: user.data
      })
    }
    else{
      localStorage.removeItem("token")
    }}
    )
  }


  /*      const dataItinerary = []                modo de consumir la data por axios no por dispatch
        axios.get("http://localhost:4000/api/infoitinerary")
          .then(response => dataItinerary.push(...response.data.response.itinerary))
          console.log(dataItinerary); */

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;