import React, { useState } from 'react';
import { Link,  Redirect } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Login.css'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Create Account'
    });

    const { name, email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
            .then(response => {
                console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signupForm = () => (
        <form className="myForm text-center">
            <header>Create New Account</header>

                <div className="form-group">
                    <i className= "fa fa-user"></i>
                    <input onChange={handleChange('name')} value={name} className="myInput" type="text" placeholder="Username" />
                </div>

                <div className="form-group">
                    <i className= "fa fa-envelope"></i>
                    <input onChange={handleChange('email')} value={email} className="myInput" type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <i className= "fa fa-lock"></i>
                    <input onChange={handleChange('password')} value={password} className="myInput" type="password" placeholder="Password" />
                </div>

                {/* <input type="submit" className="butt" value="CREATE ACCOUNT" /> */}
                <div className="form-group button">
                    <button className="butt" onClick={clickSubmit}>
                        {buttonText}
                    </button>
                </div>
                <Link to = "/signin">
                    <p style={{color: "#005AC1"}}>Already have an account ? </p>
                </Link>
        </form>
    );

    return (
        <>
        <div className="h">
            <div className="container">
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn">
                                <ToastContainer /> 
                                {isAuth() ? <Redirect to="/" /> : null}
                                {signupForm()}
                                <br />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box">
                                <img src='./images/signup.png' alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Signup;