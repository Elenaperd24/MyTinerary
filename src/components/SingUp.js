import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import swal from 'sweetalert'
import bannerSignUP from "../image/banner/bannerSignUP.jpg";
import MaterialIcon, { colorPalette } from 'material-icons-react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { InfoOutlined } from "@mui/icons-material";
import { Icon } from "@mui/material";

//<MaterialIcon className="icon-login" icon="account_circle" size='large' color="black" />//

//<img src={login} className="login" alt="login" />//

function SignUp() {
     async function newUser(event) {
    
        event.preventDefault()
        const NuevoUsuario = {
            name: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value
        }

        await axios.post("http://localhost:4000/api/signup", { NuevoUsuario })
            .then(response => {
                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details
                    console.log(detailsError)
                  detailsError.map(error => { alert(error.message)   
                  /*    swal({
                        title: "ERROR",
                        text: error.message,
                        icon: "error",
                        buttons: "ok"
                    }) */
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
                </form>
            </div>
        </div>



        </>
    )
}
export default SignUp;



