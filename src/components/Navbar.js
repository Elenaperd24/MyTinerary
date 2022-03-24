import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from 'react';
import logo from "../image/logos/logoMyTinerary.png"
import logoNegro from "../image/logos/logoNegro.png"
import login from "../image/logos/login.png";
import { accionType } from '../reducer'
import { useStateValue } from '../StateProvide';
import axios from 'axios'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import usuario from "../image/logos/usuario.jpg"


function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const [colorLogo, setColorLogo] = useState(true);
    const [color, setColor] = useState("prueba");
    const [{ user }, dispatch] = useStateValue()

    async function cerrarSesion() {
        const email = user.datosUser.email
        await axios.post("http://localhost:4000/api/signout", { email })
            .then(response =>{
                localStorage.removeItem("token")
                dispatch({
                    type: accionType.USERDB,
                    user: null
                })})
    }
    const changeNavbarColor = () => {
        if (window.scrollY > 100) {
            setColorchange(true);
            setColorLogo(false);
        }
        else {
            setColorchange(false);
            setColorLogo(true);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className={colorChange ? "colorChange navbar shadow navbar-expand-md navbar-light  fixed-top " :
                "navbar navbar-expand-md shadow navbar-light fixed-top "}>
                <div className="container-fluid p-0">
                    <LinkRouter to="/home">
                        <img src={colorLogo ? logo : logoNegro} className="navbar-brand logo img-fluid" alt="brand" />
                    </LinkRouter>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + color} id="navbarSupportedContent">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav ">
                            <li className="nav-item" >
                                <LinkRouter to="/home" className="nav-link">
                                    <button className="btn btn-nav" >HOME</button>
                                </LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter to="/cities" className="nav-link">
                                    <button className="btn btn-nav" >CITIES</button>
                                </LinkRouter>
                            </li>
                            {!user ?
                                <li className="nav-item">
                                    <LinkRouter to="/signin" className=" ">
                                        <button className="btn btn-nav p-0 m-1 " ><img src={login} className="login" style={{ backgroundColor: "transparent", border: 'none', padding: 2, marginTop: 6, marginLeft: 4 }} alt="login" /></button>
                                    </LinkRouter>
                                </li> :
                                <div className="dropdown">
                                    <button className="btn btn-nav p-0 m-1 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src={usuario} className="login" style={{ backgroundColor: "transparent", borderRadius: '100px', borderStyle:"solid", borderColor:"#ff4b4b", padding: 2, marginTop: 6, marginLeft: 4 }} alt="login" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><div className="dropdown-item" onClick={() => cerrarSesion()}>Sign Out</div></li>
                                    </ul>
                                </div>} 
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar;