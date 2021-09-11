
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
// import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import EditInput from './EditInput';
import EditSocial from './EditSocial';
import UpdatePassword from './UpdatePassword';


const Editprofile = ({ history }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        collegeName: '',
        gitHub: '',
        linkedIn: '',
        resume: '',
        gender: '',
        buttonText: 'Update Profile'
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
                const { name, email, mobile, address, collegeName, gitHub, linkedIn, resume, gender } = response.data;
                setValues({ ...values, name, email, mobile, address, collegeName, gitHub, linkedIn, resume, gender });
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

    const { name, email, mobile, address, collegeName, gitHub, linkedIn, resume, gender, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Updating Profile' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/user/update`,

            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { name, email, mobile, address, collegeName, gitHub, linkedIn, resume, gender },
        })
            .then(response => {
                console.log('PRIVATE PROFILE UPDATE SUCCESS', response);
                updateUser(response, () => {
                    setValues({ ...values, buttonText: 'Profile Updated' });
                    toast.success('Profile Updated Successfully');
                })

            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                setValues({ ...values, buttonText: 'Update Profile' });
                toast.error(error.response.data.error);
            });
    };




    const updateForm = () => (

        <form>

            <div className="card ">
                <div className="card-body">
                    <EditInput
                        label="Full Name"
                        type="text"
                        onChange={handleChange('name')}
                        value={values.name}
                    />

                    <EditInput
                        label="Email"
                        type="email"
                        onChange={handleChange('email')}
                        value={values.email}
                    />

                    <EditInput
                        label="Mobile"
                        type="text"
                        onChange={handleChange('mobile')}
                        value={values.mobile}
                    />

                    <EditInput
                        label="College Name"
                        type="text"
                        onChange={handleChange('collegeName')}
                        value={values.collegeName}
                    />

                    <EditInput
                        label="Gender"
                        type="text"
                        onChange={handleChange('gender')}
                        value={gender}
                    />

                    <EditInput
                        label="Address"
                        type="text"
                        onChange={handleChange('address')}
                        value={address}
                    />

                    



                    <EditSocial
                        socialIcon=<i class="fa fa-github mr-2" aria-hidden="true"></i>
                    socialLabel="GitHub"
                    socialChange={handleChange('gitHub')}
                    socialValue={gitHub}
            />

                    <EditSocial
                        socialIcon=<i class="fa fa-linkedin  text-primary mr-2" aria-hidden="true"></i>
                    socialLabel="LinkedIn"
                    socialChange={handleChange('linkedIn')}
                    socialValue={linkedIn}
            />

                    <EditSocial
                        socialIcon=<i class="fa fa-book mr-2" aria-hidden="true"></i>
                    socialLabel="Resume"
                    socialChange={handleChange('resume')}
                    socialValue={resume}
            />


                </div>
            </div>

        </form>



    )


    return (
        <>
            {/* <!-- Breadcrumb --> */}
            <section className="breadcrumbs">
                <div className="container">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-12">
                            <div>
                            <h2><i className="fa fa-pencil"></i>{values.name}</h2>
                            {/* <li><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back to Dashboard</li> */}
                            </div>
                            <ul>
                                <li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
                                <li><NavLink to="/private"><i className="fa fa-clone"></i>Profile</NavLink></li>
                                <li className="active"><NavLink to="/profile-edit"><i className="fa fa-clone"></i>Profile Edit</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Breadcrumb --> */}
            <div className="container my-5 pb-5">
                <div className="main-body">

                    <div className="row gutters-sm profile">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center mb-5">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{values.name}</h4>
                                            <p className="text-secondary mb-1">{values.email}</p>
                                            <p className="text-muted font-size-sm">{values.address}</p>

                                        </div>
                                    </div>

                                    
                                 <UpdatePassword />


                                </div>
                            </div>

                        </div>

                        <div className="col-md-8">
                            {updateForm()}


                            <button className="btn btn-primary text-white mt-5 p-2" onClick={clickSubmit}>
                                <i class="fa fa-bookmark" aria-hidden="true"></i> {buttonText}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Editprofile;
