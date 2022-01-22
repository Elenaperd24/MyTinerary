import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

import logo from "../image/logos/logoMyTinerary.png"
import logoNegro from "../image/logos/logoNegro.png"

function NavbarOriginal() {
    const [colorChange, setColorchange] = useState(false);
    const [colorLogo, setColorLogo] = useState(true);
    const [color, setColor] = useState("prueba");

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
        <nav className={colorChange ? "colorChange navbar navbar-expand-lg shadow navbar-light fixed-top" :
            "navbar shadow navbar-expand-lg navbar-light fixed-top transparent"}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={colorLogo ? logo : logoNegro} className="logo navbar-brand" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LinkRouter to="/">
                            <li className="nav-item ">
                                <a className="nav-link btn btn-nav" aria-current="page" href="#">Home</a>
                            </li>
                        </LinkRouter>
                        <LinkRouter to="/cities">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cities</a>
                            </li>
                        </LinkRouter>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default NavbarOriginal;