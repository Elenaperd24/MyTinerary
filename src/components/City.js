import React from "react";
import BannerCity from "../image/banner/bannerCity.jpg"
import usuario from "../image/logos/usuario.jpg"
import CarouselItinerary from "../components/CarouselItinerary"


function City() {   

    return (
        <>
            
            <img src={BannerCity} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" />
            <CarouselItinerary/>
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