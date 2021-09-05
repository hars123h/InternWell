import React, { useState } from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const InternForm = () => {
<<<<<<< Updated upstream

const handleChange = () => {
    
}

const message = () => {

}

const clickSubmit = () => {

}


    const SendDetailForm = () => (
        <form>
            <div className="row">
                <div className="col-lg-12 col-12">
=======
    const [values, setValues] = useState({
        name: '',
        email: '',
        hire: '',
        hear: '',
        course: '',
        story:'',
        linkedIn: '',
        resume:'',
        buttonText: 'Submit Message'
    });

    const { name, email, hire, hear, course, story, linkedIn, resume, buttonText } = values;

    const handleChange = name => event => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/internForm`,
            data: { name, email, hire, hear, course, story, linkedIn, resume}
        })
        .then(response => {
            console.log('MESSAGE SENT SUCCESS', response);
            setValues({ ...values, name: '', email: '', hear: '', hire: '', story: '', course: '', linkedIn: '', resume: '', buttonText: 'Submitted' });
            toast.success(response.data.message);
        })
            .catch(error => {
                console.log('MESSAGE SENT ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

   
    const SendDetailForm = () => (
        <form>
            <div className="row">
            <div class="col-lg-6 col-12">
                    <div class="form-group">
                        <input onChange={handleChange('name')} type="text" value={name} placeholder="Your Name" />
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="form-group">
                        <input  onChange={handleChange('email')} value={email} type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="col-lg-6 col-12">
>>>>>>> Stashed changes
                    <div className="form-group">
                        <textarea onChange={handleChange('hire')} type="text" value={hire} placeholder="Why should we hire you?" required="required" />
                    </div>
                </div>

<<<<<<< Updated upstream
                    <div className="col-lg-12 col-12">
                        <div className="form-group">
                            <textarea onChange={handleChange('')} type="text" value={""} placeholder="How did you hear about this opportunity ?" required="required" />
                        </div>
=======
                <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('hear')} type="text" value={hear} placeholder="How did you hear about this opportunity ?" required="required" />
>>>>>>> Stashed changes
                    </div>
                </div>

<<<<<<< Updated upstream
                    <div className="col-12">
						<div className="form-group">
							<select name="subject">
							<option className="option" value="1">Web Development</option>
							<option className="option" value="2">Digital Marketing</option>
							<option className="option" value="3">Social Media Marketing</option>
							<option className="option" value="4">App Development</option>
						    <option className="option" value="5">Content Writer</option>
							</select>
						</div>
					</div>
=======
                <div class="col-12">
                    <div class="form-group">
                        <select className="form-control form-control-lg select_style "
                         value={course} name="course" id="course" onChange={handleChange('course')}
                         
                           >
                            <option value="none">Select The Course</option>
                            <option value="1">Web Development</option>
                            <option value="2">Digital Marketing</option>
                            <option value="3">Social Media Marketing</option>
                            <option value="4">App Development</option>
                            <option value="5">Content Writer</option>
                        </select>
                    </div>
                </div>
>>>>>>> Stashed changes

                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('story')}  value={story} rows="6" placeholder="Tell us your life story within 100 words" ></textarea>
                    </div>
                </div>

<<<<<<< Updated upstream
                        <div className="col-lg-12 col-12">
							<div className="form-group">
							<input type="url" placeholder="Your LinkedIn Profile" required="required" />
							</div>
						</div>

						<div className="col-lg-12 col-12">
							<div className="form-group">
							<input type="url" placeholder="Your Resume (optional)" />
							</div>
						</div>
                        
                        <div className="col-lg-3 col-12">
                            <div className="form-group button">
                                <button onClick={clickSubmit} className="btn primary">Send</button>
                            </div>
                        </div>
=======
                <div class="col-lg-12 col-12">
                    <div class="form-group">
                        <input onChange={handleChange('linkedIn')}  value={linkedIn}  type="text" placeholder="Your LinkedIn Profile" required="required" />
                    </div>
                </div>

                <div class="col-lg-12 col-12">
                    <div class="form-group">
                        <input onChange={handleChange('resume')}  value={resume}  type="text" placeholder="Your Resume (optional)" />
>>>>>>> Stashed changes
                    </div>
                </div>

                <div className="col-lg-12 col-12">
                    <div className="form-group button">
                        <button onClick={clickSubmit} className="btn primary">{buttonText}</button>
                    </div>
                </div>
            </div>
        </form>
    )

    return (
        <div>
            <section className="breadcrumbs">
                <div className="container">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-12">
                            <h2><i className="fa fa-pencil"></i>Your Details</h2>
                            <ul>
                                <li><a href="/"><i className="fa fa-home"></i>Home</a></li>
                                <li className="active"><a href="/contact"><i className="fa fa-clone"></i>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-us" className="contact-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <span className="title-bg">Contact</span>
                                <h1>Your Details</h1>
                                <p>A Socio Startup whose vision is to work for all while leaving no one
                                    behind. InternWell takes projects from SMEs and hire interns to work on
                                    the projects alongside InternWell's team.</p>
                            </div>
                        </div>
<<<<<<< Updated upstream
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-main">
                                    <div className="row">
                                        {/* <!-- Contact Form --> */}
                                        <div className="col-lg-12 col-12">
                                            <div className="form-main">
                                                <div className="text-content">
                                                    <h2 style={{color: "#000"}}>Send Us your Details</h2>
                                                </div>
                                                {SendDetailForm()}
=======
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-main">
                                <div className="row">
                                    {/* <!-- Contact Form --> */}
                                    <div className="col-12">
                                        <div className="form-main">
                                            <div className="text-content">
                                                <h2>Send Us your Details</h2>
>>>>>>> Stashed changes
                                            </div>
                                            {SendDetailForm()}
                                        </div>
                                    </div>
                                    {/* <!--/ End Contact Form --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InternForm
