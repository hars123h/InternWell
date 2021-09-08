import React, { useState } from 'react';
import { Link,  Redirect } from 'react-router-dom';

import axios from 'axios';
import { isAuth } from '../../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './CardUI.css'

const NewService = () => {
    
    return (
        <>
        <div className="h">
        <div className="container">
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn">
                                <form className="myForm text-center">
                                    <header>Create new account</header>
                                    <div className="form-group">
                                        <i className= "fa fa-user"></i>
                                        <input className="myInput" type="text" placeholder="Username" />
                                    </div>

                                    <div className="form-group">
                                        <i className= "fa fa-envelope"></i>
                                        <input className="myInput" type="email" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <i className= "fa fa-lock"></i>
                                        <input className="myInput" type="password" placeholder="Password" />
                                    </div>

                                    <input type="submit" className="butt" value="CREATE ACCOUNT" />

                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="myRightCtn">
                                <div className="box">
                                    <img src='./images/signup-image.jpg' alt="" />

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default NewService
