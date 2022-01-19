import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import cardcities from "../image/cities/cardcities.jpg";
import CarouselHeader from "./CarouselHeader";

function Cities() {
    return (
        <>
            <CarouselHeader />

            <div className="card mb-3 w-100">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={cardcities} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 w-100">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={cardcities} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 w-100">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={cardcities} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}
export default Cities;