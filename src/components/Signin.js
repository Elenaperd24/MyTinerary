import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import bannerSignin from "../image/banner/bannerSignin.jpg";
import axios from "axios"
import swal from 'sweetalert'
import { accionType } from '../reducer'
import { useStateValue } from '../StateProvide';
import { useEffect } from 'react';


function Signin() {
    const [{ user }, dispatch] = useStateValue()

    const responseGoogle = (response) => {
  console.log(response);

  
    }

    async function signinUser(event) {
        event.preventDefault()
        const UserData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        await axios.post("http://localhost:4000/api/signin", { UserData })
            .then(response => {
                if (response.data.success === false) {
                    swal({
                        title: "error",
                        icon: "error",
                        text: response.data.error,
                        buttons: "ok"
                    })
                }
                else if (response.data.success === true) {
                    console.log("estas logueado");

                    swal({
                        title: "Login....",
                        icon: "success",
                        text: "You have started sesion",
                        buttons: "ok"
                    })

                }
                dispatch({
                    type: accionType.USERDB,
                    user: response.data.response
                })              
            

            })
    }
    return (
        <>
            <div className="gabi">
                <img src={bannerSignin} alt="bannerSignin" className="banner-image w-100 d-flex justify-content-center aling-item-center" />
                <div className="menu shadow container-md">
                    <form className="formSign row" onSubmit={signinUser}>
                        <div className="mb-3 col-12">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Please enter a username.</div>
                        </div>
                        <div className="mb-3 col-12" >
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Please enter a password.</div>
                        </div>
                        <div className="mb-3 form-check col-12">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <div className="helpForm col-12">
                            <h5>Need help logging in?</h5>
                            <div className="d-flex">
                                <p>Don't have an account?</p>
                                <LinkRouter to="/singup">
                                    {/*<a className="" href="#">*/}Sign Up{/*</a>*/}
                                </LinkRouter>
                            </div>
                        </div>
                        <div>
                            <input type="submit" className="btn d-flex btn-signin" value="Sign In" />
                            
                        </div>

                                        <GoogleLogin
    clientId="800359852680-6rhb9r988gompretejui4b0lmr8ok60i.apps.googleusercontent.com"
    buttonText="SignIn with Google Account"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

                        
                    </form>
     



                </div>
            </div>
        </>
    )
}
export default Signin;



