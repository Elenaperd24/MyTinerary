import React from "react";
import Banner2Missions from '../image/cities/Missions Argentina/Banner2.jpg'
import Banner2BuenosAires from '../image/cities/Buenos Aires/Banner2.jpg'
import Banner2Ushuaia from '../image/cities/Ushuaia/Banner2.jpg'

function Carouselhome(data) {
    const cities = data.data
    
    console.log(cities);


    let cont = 0;
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {cities.map((city) => {
                    cont = cont + 1
                    return (
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={cont} aria-label={"Slide " + (cont + 1)}></button>
                    )
                })}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">                   
                    <img src={process.env.PUBLIC_URL + `/image/cities/${cities[0].name}/${cities[0].images.banner2}`} alt={cities[0].name} className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block infoCityCorusel">
                        <h5>{cities[0].name}</h5>
                        <p>{cities[0].descripcion.main}</p>
                    </div>
                </div>
                
                {cities.map((city) => {
                    return (
                        <div className="carousel-item">
                             <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block infoCityCorusel">
                                <h5>{city.name}</h5>
                                <p>{city.descripcion.main}</p>
                            </div>
                        </div>)
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )

}
export default Carouselhome;