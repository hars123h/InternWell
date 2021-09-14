import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Forgot = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Forgot Password'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email }
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
                toast.success(response.data.message);
                setValues({ ...values, buttonText: 'Requested' });
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Request password reset link' });
            });
    };

    const passwordForgotForm = () => (
        <form className="myForm text-center">
        <header className="mt-3 mb-5">Forgot Password</header>

        <div className="form-group mt-4 mr-5">
            <i className= "fa fa-envelope"></i>
            <input onChange={handleChange('email')} value={email} className="myInput" type="email" placeholder="Email" />
        </div>

        <div className="form-group button mr-5">
                    <button className="butt" onClick={clickSubmit}>
                        {buttonText}
                    </button>
                </div>
        </form>
    );

    return (
        <div className="h">
        <div className="container">
            <div className="myCard">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="myLeftCtn">
                            <ToastContainer /> 
                            {passwordForgotForm()}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default Forgot;