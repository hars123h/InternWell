import React, { useState, useEffect } from 'react';
// import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import { isAuth, getCookie, signout, updateUser} from '../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Profile from '../components/Profile/Profile'

const Private = ({ history }) => {
    const [values, setValues] = useState({
        name: '',
        role: '',
        email: '',
        mobile: '',
        address: '',
        collegeName: '',
        gitHub: '',
        linkedIn: '',
        resume: '',
        gender: '',
        buttonText: 'Submit'
    });
    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, []);
    const loadProfile = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('PRIVATE PROFILE UPDATE', response);
                const { name, role, email, mobile,  address, collegeName, gitHub, linkedIn, resume, gender } = response.data;
                setValues({ ...values, name, role, email, mobile,  address, collegeName, gitHub, linkedIn, resume, gender });
            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                if (error.response.status === 401) {
                    signout(() => {
                        history.push('/');
                    });
                }
            });
    };

    return (
        <>
           <Profile 
               userName={values.name}
               email={values.email}
               mobile={values.mobile}
               address={values.address}
               collegeName={values.collegeName}
               gitHub={values.gitHub}
               linkedIn={values.linkedIn}
               resume={values.resume}
               gender={values.gender}
           /> 
        </>
    )
};

export default Private;