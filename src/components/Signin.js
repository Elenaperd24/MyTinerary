import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import login from "../image/logos/login.png";
import bannerSignin from "../image/banner/bannerSignin.jpg";
import SignUp from "./SingUp";
import MaterialIcon, { colorPalette } from 'material-icons-react';
//<MaterialIcon className="icon-login" icon="account_circle" size='large' color="black" />//

//<img src={login} className="login" alt="login" />//

function Signin() {
    const [showMenu, setShowMenu] = React.useState(false)

    function mostrarMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true)

    }

    function abrirSingUp() {
        <SignUp />
    }

    return (
        <>
            <img src={bannerSignin} className="banner-image w-100 d-flex justify-content-center aling-item-center" />
            <div className="menu shadow">
                <form className="formSign">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Please enter a username.</div>
                    </div>
                    <div className="mb-3" >
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        <div id="emailHelp" className="form-text">Please enter a password.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div className="helpForm ">
                        <h5>Need help logging in?</h5>
                        <div className="d-flex">
                            <p>Don't have an account?</p>
                            <LinkRouter to="/singup">
                                <a className="" href="#">Sign Up</a>
                            </LinkRouter>
                        </div>
                    </div>
                    <input type="submit" className="btn d-flex btn-signin col-12" value="Sign In" onclick="" />
                </form>
            </div>



        </>
    )
}
export default Signin;



