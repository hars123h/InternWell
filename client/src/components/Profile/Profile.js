import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Profile.css'


const Profile = ({
    userName,
    email,
    address,
    mobile,
    collegeName,
    gitHub,
    linkedIn,
    resume,
    gender


}) => {
    return (
        <>
            {/* <!-- Breadcrumb --> */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2><i className="fa fa-pencil"></i>{userName}</h2>
                            <ul>
                                <li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
                               
                                <li className="active"><NavLink to="/private"><i className="fa fa-clone"></i>Edit Profile</NavLink></li>
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
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{userName}</h4>
                                            <p className="text-secondary mb-1">{email}</p>
                                            <p className="text-muted font-size-sm">{address}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {userName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {mobile}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Collage Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {collegeName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {gender}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 ml-3">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ml-3 ml-sm-0">
                                            {address}
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i class="fa fa-github mr-2" aria-hidden="true"></i>  Github</h6>
                                        <span className="text-secondary">{gitHub}</span>

                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i class="fa fa-linkedin  text-primary mr-2" aria-hidden="true"></i>  LinkedIn</h6>
                                        <span className="text-secondary">{linkedIn}</span>


                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i class="fa fa-book mr-2" aria-hidden="true"></i> Resume </h6>
                                        <span className="text-secondary">{resume}</span>

                                    </li>
                                </ul>
                            </div>
                            <Link to="/profile-edit" className="btn btn-warning text-white mt-5 p-2">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
