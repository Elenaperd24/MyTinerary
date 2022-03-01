import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvide";
import usuario from "../image/logos/usuario.jpg"
import usuario2 from "../image/logos/usuario2.jpg"
import usuario3 from "../image/logos/usuario3.jpg"
import axios from 'axios'
import ListaImagenesCity from "./ListaImagenesCity"
import CarouselItinerario from "./CarouselItinerario";
import Prueba from "../image/prueba.jpg"

import { useParams } from "react-router-dom";

function City() {
    const [itineraries, setItineraries] = useState([])
    const { id } = useParams()
    const [{ cities }, dispatch] = useStateValue()
    let city = cities.filter(item => item._id === id)

    useEffect(() => {
        window.scrollTo(0, 0);
        city.map(city =>
            axios.get(`http://localhost:4000/api/infoitinerary/${city.name}`)
                .then(response => setItineraries(response.data.response.itinerary))
        )
    }, [])

    return (
        <>
            <div style={{posicion:"absolute" }}>
                <img src={process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.banner1}`} className="baner-image w-100 bannerCity d-flex justify-content-center aling-item-center" alt="..." />
                {/*  <img src={Prueba} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" /> */}
                <div className="NameCity" style={{ fontFamily: "Permanent Marker" }} >{city[0].name}</div>
            </div>

            <div className="d-flex informacionPrincipal">
                <div className="nameCountry ">
                    <h1>{city[0].name}</h1>
                </div>
                <div className="descripcionCity shadow">
                    <h5>{city[0].descripcion.main}
                    </h5>
                </div>
            </div>
            <div className="importantInformation">
                <h1>Look at the itineraries</h1>
                <h1>that you are going to love</h1>
            </div>
            <CarouselItinerario itineraries={itineraries} />
            <div className="whyCity container">
                <h3>Why choose </h3>
                <h1>{city[0].name + " "} as a destination?</h1>
            </div>
            <ListaImagenesCity city={city} />
            <div className="importantInformation">
                <h1>Important </h1>
                <h1>information</h1>
            </div>
            <div className="d-flex contInfoImportant container">
                <div className="row">
                    <div className="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Idiom</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{city[0].languages}</h6>
                            <div className="foto-usuario d-flex">
                                <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p className="card-text info">{city[0].descripcion.language}</p>
                        </div>
                    </div>
                    <div className="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Population and territory</h5>
                            <h6 className="card-subtitle mb-2 text-muted">+{city[0].population + " "} M</h6>
                            <div className="foto-usuario d-flex">
                                <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p className="card-text info">{city[0].descripcion.population}</p>
                        </div>
                    </div>
                    <div className=" card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Weather</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
                            <div className="foto-usuario d-flex">
                                <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p className="card-text info ">{city[0].descripcion.weather}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="importantInformation">
                <h1>Know experiences</h1>
                <h1>and itineraries of our users</h1>
            </div>
            <div className="d-flex contenedorReview container">
                <div className="row">
                    <div className="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Review</h6>
                            <div className="foto-usuario d-flex">
                                <img src={usuario3} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="  card-text accordion-button collapsed moreReview" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            See itinerary details
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">the capital city of the Republic of Ireland, situated in the northeast of the country, on the coast: ... He owns a house and 250 acres of land in the most expensive area of north Dublin. The last time I was in Dublin, the traffic was all snarled up</div>
                                    </div>
                                </div>
                                <div className="enlaceItinerary d-flex">
                                    {/*<a href="#" className="card-link">*/}Itinerary   User{/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Review</h6>
                            <div className="foto-usuario d-flex">
                                <img src={usuario2} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="  card-text accordion-button collapsed moreReview" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            See itinerary details
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">the capital city of the Republic of Ireland, situated in the northeast of the country, on the coast: ... He owns a
                                            house and 250 acres of land in the most expensive area of north Dublin. The last time I was in
                                            Dublin, the traffic was all snarled up</div>
                                    </div>
                                </div>
                                <div className="enlaceItinerary d-flex">
                                    {/*<a href="#" className="card-link">*/}Itinerary   User{/*</a>*/}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Review</h6>
                            <div className="foto-usuario d-flex">
                                <img src={usuario} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="  card-text accordion-button collapsed moreReview" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            See itinerary details
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">the capital city of the Republic of Ireland, situated in the northeast of the country, on the coast: ... He owns a house and 250 acres of land in the most expensive area of north Dublin. The last time I was in Dublin, the traffic was all snarled up</div>
                                    </div>
                                </div>
                                <div className="enlaceItinerary d-flex">
                                    {/*<a href="#" className="card-link">*/}Itinerary   User{/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default City;