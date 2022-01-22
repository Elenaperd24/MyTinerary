import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import login from "../image/logos/login.png";
import bannerSignUP from "../image/banner/bannerSignUP.jpg";
import MaterialIcon, { colorPalette } from 'material-icons-react';
//<MaterialIcon className="icon-login" icon="account_circle" size='large' color="black" />//

//<img src={login} className="login" alt="login" />//

function SignUp() {
    const [showMenu, setShowMenu] = React.useState(false)

    function mostrarMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true)

    }

    return (
        <>  <div>
            <img src={bannerSignUP} className="banner-image w-100 d-flex justify-content-center aling-item-center" />
            <div className="menu-signUP shadow container-md">
                <form className="container-md form-SignUP">
                    <div className="d-flex">
                        <div className="mb-3 container-md">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Please enter your Name.</div>
                        </div>
                        <div className="mb-3 container-md">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Please enter your Last Name.</div>
                        </div>
                    </div>
                    <div className="mb-3 container-md">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Please enter a username.</div>
                    </div>
                    <div className="d-flex passwordSignUp">
                        <div className="mb-3 container-md" >
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Please enter a password.</div>
                        </div>
                        <div className="mb-3 container-md" >
                            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Please enter again your password.</div>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div>
                        <input type="submit" className="btn d-flex btn-signUp" value="Sign Up" onclick="" />
                        </div>
                </form>
            </div>
        </div>



        </>
    )
}
export default SignUp;



