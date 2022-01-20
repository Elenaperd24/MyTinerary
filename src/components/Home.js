import React from "react";
import banner from "../image/banner/banner1.jpg";
import CitiesLike from "./CitiesLike"
import Carouselhome from './Carouselhome';
import { Link as LinkRouter } from "react-router-dom";

function Home() {

    return (
        <div className="home">
            <img src={banner} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" />
            {/**<LinkRouter to="/cities">
                <button className="btn btn-cties-home">Cities</button>
            </LinkRouter>**/}
            <CitiesLike />
            <Carouselhome />

        </div>
    )

}
export default Home;