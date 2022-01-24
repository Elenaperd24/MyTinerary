import React from "react";
import logoNegro from "../image/logos/logoNegro.png"

function Footer() {
    return (
        <footer className="footer">
            <footer className="bd-footer py-5 mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                                <img src={logoNegro} width="180" height="auto" className="d-block me-2" viewBox="0 0 118 94" role="img"/>
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.1/about/team/"> Team MyTinerary</a> </li>
                                
                                
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5>Links</h5>
                            <ul className="list-unstyled ">
                                <li className="mb-2"><a className="text-decoration-none" href="#">Home</a></li>
                                <li className="mb-2"><a className="text-decoration-none" href="#">Cities</a></li>
                                <li className="mb-2"><a className="text-decoration-none" href="#">Sign In</a></li>
                                <li className="mb-2"><a className="text-decoration-none"href="#">Sign Up</a></li>
                                <li className="mb-2"><a className="text-decoration-none"href="#">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>Guides</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#">Review</a></li>                                
                            </ul>
                        </div>
                        
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>Places</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="">More Popular</a></li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    )
}
export default Footer;