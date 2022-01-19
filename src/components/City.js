import React from "react";
import BannerCity from "../image/banner/bannerCity.jpg"


function City() {


    return (
        <>
            <img src={BannerCity} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" />
            <div className="d-flex container-fluid">
                <div className="" style={{ width: "50%", height: "100vh", backgroundColor: "#fff5ee" }}>
                </div>

                <div className="" style={{ width: "25%", height: "50vh", backgroundColor: "#b9e3e9" }}>

                </div>
            </div>

        </>


    )

}
export default City;