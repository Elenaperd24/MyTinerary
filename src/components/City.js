import React from "react";
import BannerChile from "../image/banner/bannerSantiagoDeChile.jpg"
import usuario from "../image/logos/usuario.jpg"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ListaImagenesCity from "./ListaImagenesCity"
import BanderaChile from '../image/cities/Chile/BANDERA CHILE.png'
import CarouselItinerario from "./CarouselItinerario";

function City() {
    const useEffect = () => {
        window.scrollTo(0, 0);
        }
    
    return (
        <>
        {useEffect()}
            <img src={BannerChile} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" />
            <div className="d-flex informacionPrincipal">
                <div className="nameCountry ">
                    <h1>Santiago de Chile</h1>
                </div>
                <div className="descripcionCity shadow">
                    <h5>If you need to do one activity or tourism of work. Chile is the best country for this and more.
                        Along its territories there is several places fulfill by features necessary in order to do congress
                        and meeting of global level. You can find from parks extend, that allow one authentic connection with nature,
                        to big-organized cities that offers their service. Either If you are congress delegate, you belong a group of incentive
                        or you are a travel businessman let surprise by wonderful Chile, a place where impossible is possible.
                    </h5>
                </div>
            </div>
            <div className="whyCity container">
                <h3>Why choose </h3>
                <h1>Santiago as a destination?</h1>
            </div>
            <ListaImagenesCity />
            <div className="importantInformation">
                <h1>Important </h1>
                <h1>information</h1>
            </div>
            <div className="d-flex contInfoImportant container">
                <div className="row">
                    <div class="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Idiom</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">Spanish</h6>
                            <div className="foto-usuario d-flex">
                                <img src={BanderaChile} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p class="card-text info">The official language is Spanish, but within the
                                territory you can also find communities that speak native languages
                                depending on the area, there is great cultural diversity!</p>
                        </div>
                    </div>
                    <div class="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Population and territory</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">+18 M</h6>
                            <div className="foto-usuario d-flex">
                                <img src={BanderaChile} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p class="card-text info">About 18 million people live in Chile,
                                but the majority of the population is located in the central areas of the
                                Chilean territory, even so you cannot miss the wonders of the north, center
                                and south of the country, it is quite an experience!</p>
                        </div>
                    </div>
                    <div class=" card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Idiom</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">Weather</h6>
                            <div className="foto-usuario d-flex">
                                <img src={BanderaChile} className="card-img-top foto-usuario" alt="..." />
                            </div>
                            <p class="card-text info ">There is a great variety of climates within Chile, but it
                                all depends on the area and season of the year, you will not find another country
                                like it! Here you can find from deserts and tundra in the north to polar to the south,
                                come and discover the Chilean diversity!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="importantInformation">
                <h1>Look at the itineraries</h1>
                <h1>that you are going to love</h1>
            </div>
            <CarouselItinerario />
            <div className="importantInformation">
                <h1>Know experiences</h1>
                <h1>and itineraries of our users</h1>
            </div>


            <div className="d-flex contenedorReview container">
                <div className="row">
                    <div class="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">Review</h6>
                            <div className="foto-usuario d-flex">
                                <img src={usuario} className="card-img-top foto-usuario" alt="..." />
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
                                    <a href="#" className="card-link">Itinerary   User</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">Review</h6>
                            <div className="foto-usuario d-flex">
                                <img src={usuario} className="card-img-top foto-usuario" alt="..." />
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
                                    <a href="#" className="card-link">Itinerary   User</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card review col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <h6 classNameName="card-subtitle mb-2 text-muted">Review</h6>
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
                                    <a href="#" className="card-link">Itinerary   User</a>
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