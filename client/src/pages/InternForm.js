import React, { useState }  from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const InternForm = () => {

    const [values, setValues] = useState({
       name: '',
       course: '',
       hire: '',
       hear: '',
       message: '',
       linkedin: '',
       resume: '',
       buttonText: 'Submit'
    });

    
   
    const { name, course, hire, hear, message, linkedin, resume,  buttonText } = values;
    const handleChange = name => event => {
      console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };
   

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/intern-form`,
            data: { name, course, hire, hear, message, linkedin, resume, buttonText }
        })
        .then(response => {
            console.log('FORM SENT SUCCESS', response);
            setValues({ ...values, name: '', course: '', hire: '', hear: '', message: '', linkedin: '', resume: '',   buttonText: 'Submitted' });
            toast.success(response.data.message);
        })
            .catch(error => {
                console.log('FORM SENT ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };


    const SendDetailForm = () => (
        <form>
            <div className="row">
            <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <input onChange={handleChange('name')} type="text" value={name} placeholder="Full Name" required="required" />
                    </div>
            </div>

            <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <input onChange={handleChange('course')} type="text" value={course} placeholder="Course name for internship" required="required" />
                    </div>
            </div>

                <div className="col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('hire')} type="text" value={hire} placeholder="Why should we hire you?" required="required" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('hear')} type="text" value={hear} placeholder="How did you hear about this opportunity ?" required="required" />
                    </div>
                </div>

                

                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('message')}  value={message} rows="6" placeholder="Tell us your life story within 100 words" ></textarea>
                    </div>
                </div>

                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <input type="url" onChange={handleChange('linkedin')} value={linkedin} placeholder="Your LinkedIn Profile" />
                    </div>
                </div>

                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <input type="url" onChange={handleChange('resume')} value={resume} placeholder="Your Resume (optional)" />
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
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-main">
                                <div className="row">
                                    {/* <!-- Contact Form --> */}
                                    <div className="col-lg-8 col-12">
                                        <div className="form-main">
                                            <div className="text-content">
                                                <h2>Send Us your Details</h2>
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
