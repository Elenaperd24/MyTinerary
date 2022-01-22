import React from 'react' //IMPORTO PAQUETES DE REACT
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Cities from './components/Cities'
import City from './components/City';
import SignUp from './components/SingUp';
import Signin from './components/Signin';
import NavbarOriginal from './components/NavbarOriginal';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/"element={<Home />} />
       <Route path="/cities"element={<Cities />} />
       <Route path="/city"element={<City />} />
       <Route path="/signin"element={<Signin/>} />
       <Route path="/singup"element={<SignUp/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;