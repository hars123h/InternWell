import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };
    const informParent = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
        });
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    }; 

    const signinForm = () => (
        <form className="myForm text-center">
            <header>Login</header>

                <div className="form-group">
                    <i className= "fa fa-envelope"></i>
                    <input onChange={handleChange('email')} value={email} className="myInput" type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <i className= "fa fa-lock"></i>
                    <input onChange={handleChange('password')} value={password} className="myInput" type="password" placeholder="Password" />
                </div>

                <div className="form-group button">
                    <button className="butt" onClick={clickSubmit}>
                        {buttonText}
                    </button>
                </div>
                <Link to = "/auth/password/forgot">
                    <p style={{color: "#005AC1"}}> Forgot Password </p>
                </Link>
        </form>
    );

    return (
            <div className="h">
            <div className="container">
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn">
                                <ToastContainer /> 
                                {isAuth() ? <Redirect to="/" /> : null}
                                {signinForm()}
                                <br />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="myRightCtn">
                                <div className="box">
                                    <img src='./images/signin.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;