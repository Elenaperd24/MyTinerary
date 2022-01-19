import React from "react";
import BannerCity from "../image/banner/bannerCity.jpg"


function PruebaCardCities() {

    return (
        <>  <div className="cards-like">
            <div className="container">
                <div className="row">
                    
                    <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card item-card">
                        <img src={BannerCity} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card item-card">
                        <img src={BannerCity} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card item-card">
                        <img src={BannerCity} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )

}
export default PruebaCardCities;