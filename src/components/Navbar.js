import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Signin from "./Signin";
import logo from "../image/logos/logoMyTinerary.png"
import socialmedia from "../image/logos/socialmedia.png"
import logoNegro from "../image/logos/logoNegro.png"
import login from "../image/logos/login.png";

function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const [colorLogo, setColorLogo] = useState(true);
    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            setColorchange(true);
            setColorLogo(false);
        }
        else {
            setColorchange(false);
            setColorLogo(true);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    const [showMenu, setShowMenu] = React.useState(false)

    function mostrarMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true)

    }


    return (
        <>
            <div className="navbar1 transparent navbar-inverse">
                <div class="d-flex  ">
                    <img src={socialmedia} className="social-media" alt="social-media" />
                </div>
            </div>
            <div className="sticky-top">

                <nav className={colorChange ? 'colorChange shadow navbar-expand-lg' : 'navbar navbar-expand-lg transparent shadow navbar-dark rounded'} >
                    <div className="container-fluid">
                        <img src={colorLogo ? logo : logoNegro} className="navbar-brand logo img-fluid" alt="brand" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarToggler" className="collapse navbar-collapse">
                            <div className="navbar-nav navbar-button">
                                <LinkRouter to="/" className="nav-link" >
                                    <button className="btn btn-nav" >HOME</button>
                                </LinkRouter>

                                <LinkRouter to="/cities" className="nav-link ">
                                    <button className="btn btn-nav  " >CITIES</button>
                                </LinkRouter>                                
                                
                                <button className="btn btn-nav "><img src={login} className="login" style={{ backgroundColor: "transparent", border: 'none',padding: 2, marginTop: 6, marginLeft:4}} alt="login" /></button>
                                                                
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </>


    )

}
export default Navbar;