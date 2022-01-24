import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import cardcities from "../image/cities/cardcities.jpg";
import CarouselHeader from "./CarouselHeader";
import FloatingActionButtons from "./FloatingActionButtons";
import ColorTextFields from "./ColorTextFields";
import Vancouver from "../image/cities/Vancouver/Vancouver (4).jpg"
import Sydney from "../image/cities/sydney/sydney  (4).jpg"
import Dublin from "../image/cities/Dublin/Dublin (4).jpg"
import SantiagoDeChile from '../image/cities/Chile/Chile(4).jpg'

function Cities() {
    return (
        <>
            <CarouselHeader />
            <ColorTextFields />
            <div className="allCities d-flex row">
                <div className="card text-center">
                    <LinkRouter to="/city" style={{ textDecoration: "none", color: "#ff4b4a" }} >
                        <div className="card-header">
                            <h5 className="card-title">Santiago De Chile</h5>
                        </div>
                    </LinkRouter>
                    <div className="card-body">
                        <div className="contenerdorInfoCity">
                            <figure>
                                <img src={SantiagoDeChile} className="d-block w-100" alt="..." />
                                <div className="capa">
                                    <LinkRouter to="/city" style={{textDecoration: "none", color: "white"}}>
                                        <h3>See More About This City</h3>
                                    </LinkRouter>


                                </div>
                            </figure>
                        </div>
                        <p>Santiago (official name), also known as Santiago de Chile, is the capital and main city
                            of Chile and of the Metropolitan Region of Santiago, of which it is also the geographical
                            center and whose population is concentrated mostly in the city.
                        </p>
                        <FloatingActionButtons />
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Sydney</h5>
                    </div>
                    <div className="card-body">
                        <div className="contenerdorInfoCity">
                            <figure>
                                <img src={SantiagoDeChile} className="d-block w-100" alt="..." />
                                <div className="capa">
                                    <LinkRouter to="/city" style={{textDecoration: "none", color: "white"}}>
                                        <h3>See More About This City</h3>
                                    </LinkRouter>


                                </div>
                            </figure>
                        </div>
                        <p>Santiago (official name), also known as Santiago de Chile, is the capital and main city
                            of Chile and of the Metropolitan Region of Santiago, of which it is also the geographical
                            center and whose population is concentrated mostly in the city.
                        </p>
                        <FloatingActionButtons />
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Dublin</h5>
                    </div>
                    <div className="card-body">
                        <div className="contenerdorInfoCity">
                            <figure>
                                <img src={SantiagoDeChile} className="d-block w-100" alt="..." />
                                <div className="capa">
                                    <LinkRouter to="/city" style={{textDecoration: "none", color: "white"}}>
                                        <h3>See More About This City</h3>
                                    </LinkRouter>


                                </div>
                            </figure>
                        </div>
                        <p>Santiago (official name), also known as Santiago de Chile, is the capital and main city
                            of Chile and of the Metropolitan Region of Santiago, of which it is also the geographical
                            center and whose population is concentrated mostly in the city.
                        </p>
                        <FloatingActionButtons />
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div >
        </>
    )
}
export default Cities;