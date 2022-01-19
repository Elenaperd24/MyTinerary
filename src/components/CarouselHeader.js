import React from "react";
import Banner1 from "../image/banner/banner1.jpg"
import Banner2 from "../image/banner/banner2.jpg"
import Banner3 from "../image/banner/banner3.jpg"
import logoNegro from "../image/logos/logoNegro.png"


function CarouselHeader() {

    return (
        <>
        

        <div id="carouselExampleSlidesOnly " className="carousel slide carrouselHeader" data-bs-ride="carousel">
            <div className="carousel-inner"> 
                <div className="carousel-item active">
                <img src={Banner2} className="d-block w-100" alt="Banner1" />
                </div>
                <div className="carousel-item">
                <img src={Banner1} className="d-block w-100" alt="Banner2" />
                </div>
                <div className="carousel-item">
                <img src={Banner3} className="d-block w-100" alt="Banner3" />
                </div>
            </div>
        </div>
        </>
    )

}
export default CarouselHeader;