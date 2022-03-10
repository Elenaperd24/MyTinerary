import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import swal from 'sweetalert'
import bannerSignUP from "../image/banner/bannerSignUP.jpg";
import axios from "axios";

//<MaterialIcon className="icon-login" icon="account_circle" size='large' color="black" />//

//<img src={login} className="login" alt="login" />//

function SignUp() {

    const responseGoogle = async (response) => {
        const NuevoUsuario = {
            name: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.googleId + "Ep",
            from: "Google"
        }
        detectFrom(NuevoUsuario)
    }

    const responseFacebook = async (response) => {
        const NuevoUsuario = {
            name: response.name,
            lastName: response.lastName,
            email: response.email,
            password: response.id + "Ep",
            from: "Facebook"
        }
        detectFrom(NuevoUsuario)
    }
    async function newUser(event) {
        event.preventDefault()
        const NuevoUsuario = {
            name: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: "signup"
        }
        detectFrom(NuevoUsuario)
    }
    async function detectFrom(NuevoUsuario) {
        await axios.post("http://localhost:4000/api/signup", { NuevoUsuario })
            .then(response => {
                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details
                    console.log(detailsError)
                    detailsError.map(error =>
                        swal({
                            title: " error",
                            icon: "error",
                            text: error.message,
                            buttons: "ok"
                        }))
                }
                else if (response.data.success === true) {
                    console.log(response.data);
                    swal({
                        title: " Login...",
                        icon: "success",
                        text: response.data.response,
                        buttons: "ok"
                    })
                }
                else {
                    console.log(response.data)
                    swal({
                        title: response.data.response,
                        icon: "warning",
                        buttons: "ok"
                    })
                }
            })
    }
    return (
        <>  <div>
            <img src={bannerSignUP} className="banner-image w-100 d-flex justify-content-center aling-item-center" />
            <div className="menu-signUP shadow container-md">
                <form onSubmit={newUser} className="container-md form-SignUP">
                    <div className="d-flex">
                        <div className="mb-3 container-md">
                            <label for="exampleInputName" className="form-label">Name</label>
                            <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            <div id="exampleInputName" className="form-text">Please enter your Name.</div>
                        </div>
                        <div className="mb-3 container-md">
                            <label for="exampleInputName2" className="form-label">Last Name</label>
                            <input type="name" className="form-control" id="exampleInputName2" aria-describedby="emailHelp" />
                            <div id="exampleInputName2" className="form-text">Please enter your Last Name.</div>
                        </div>
                    </div>
                    <div className="mb-3 container-md">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="" className="form-text">Please enter a email.</div>
                    </div>
                    <div className="d-flex passwordSignUp">
                        <div className="mb-3 container-md" >
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div id="exampleInputPassword1" className="form-text">Please enter a password.</div>
                        </div>
                        <div className="mb-3 container-md" >
                            <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" />
                            <div id="exampleInputPassword2" className="form-text">Please enter again your password.</div>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div>
                        <input type="submit" className="btn d-flex btn-signUp" />
                    </div>
                    <GoogleLogin
                        clientId="800359852680-6rhb9r988gompretejui4b0lmr8ok60i.apps.googleusercontent.com"
                        buttonText="SignUp with Google Account"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        appId="644823753295174"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook} />
                </form>
            </div>
        </div>
        </>
    )
}
export default SignUp;



