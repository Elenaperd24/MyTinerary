import React , {useEffect} from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvide";
import cardcities from "../image/cities/cardcities.jpg";
import CarouselHeader from "./CarouselHeader";
import FloatingActionButtons from "./FloatingActionButtons";
import ColorTextFields from "./ColorTextFields";
import Banner2Sydeney from '../image/cities/Sydney/Banner2.jpg'
import Banner2BuenosAires from '../image/cities/Buenos Aires/Banner2.jpg'
import Banner2Ushuaia from '../image/cities/Ushuaia/Banner2.jpg'

const Cities = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
 
    const [{ cities },dispatch] = useStateValue()

     return (
        <>   
            <CarouselHeader />
            <ColorTextFields />
            <div className="allCities d-flex row">
                {cities.map((city) => { 
                    return(
                    <div className="card text-center" key={city._id}>
                        <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none", color: "white" , background: "#ff4b4a"}} >
                            <div className="card-header">
                                <h5 className="card-title">{city.name}</h5>
                            </div>
                        </LinkRouter>
                        <div className="card-body">
                            <div className="contenerdorInfoCity">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} className="imagen-card-cities d-block w-100"/>
                                    <div className="capa">
                                        <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none", color: "white" }}>
                                            <h3>See More About This City</h3>
                                        </LinkRouter>
                                    </div>
                                </figure>
                            </div>
                            <p>{city.descripcion.main}
                            </p>
                            <FloatingActionButtons />
                        </div>
                        <div className="card-footer text-muted">
                        </div>
                    </div>)
                })}

            </div >
        </>
    )
}
export default Cities;