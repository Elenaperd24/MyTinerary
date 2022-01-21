import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import cardcities from "../image/cities/cardcities.jpg";
import CarouselHeader from "./CarouselHeader";

function Cities() {
    return (
        <>
            <CarouselHeader />
            <div className="allCities d-flex row">
                <div className="card mb-3 card-city">
                    <LinkRouter to="/city" className="nameCiudad">
                    <h1 className="d-flex nameCiudad" >Dublin</h1>
                    </LinkRouter>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cardcities} className="card-img-top imagen-card" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="tituloCard">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 card-city">
                    <h1 className="d-flex nameCiudad" >Dublin</h1>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cardcities} className="card-img-top imagen-card" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 card-city">
                    <h1 className="d-flex nameCiudad" >Dublin</h1>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cardcities} className="card-img-top imagen-card" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}
export default Cities;