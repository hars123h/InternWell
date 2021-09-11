import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
// import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




const UpdatePassword = () => {

    const [values, setValues] = useState({

        password: '',
        cPassword: '',
        buttonText: 'Update Password'
    });
    const token = getCookie('token');
    const { password, cPassword, buttonText } = values;

    const passwordChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };
    
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Updating Password' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/user/password`,
    
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { password, cPassword },
        })
            .then(response => {
                console.log('PASSWORD  UPDATE SUCCESS', response);
                updateUser(response, () => {
                    setValues({ ...values, buttonText: 'Password Updated' });
                    toast.success('Password Updated Successfully');
                })
    
            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                setValues({ ...values, buttonText: 'Update Password' });
                toast.error(error.response.data.error);
            });
    };

    

    return (
        <>
            

            
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-2"> Password</h6>
                <input type="password" class="form-control" onChange={passwordChange('password')} value={password}></input>
                
            </li>


            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-2">Confirm Password</h6>
                <input type="password" class="form-control" onChange={passwordChange('cPassword')} value={cPassword}></input>
            </li>

            <button className="btn btn-primary text-white mt-5 p-2 ml-3" onClick={clickSubmit}>
                <i class="fa fa-bookmark" aria-hidden="true"></i> {buttonText}
            </button>

        </>
    )
}

export default UpdatePassword
