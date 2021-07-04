import React, { useState }  from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';





const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        buttonText: 'Submit Message'
    });

    const { name, email, message, buttonText } = values;

    const handleChange = name => event => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/contact`,
            data: { name, email, message }
        })
        .then(response => {
            console.log('MESSAGE SENT SUCCESS', response);
            setValues({ ...values, name: '', email: '', message: '', buttonText: 'Submitted' });
            toast.success(response.data.message);
        })
            .catch(error => {
                console.log('MESSAGE SENT ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const ContactForm = () => (
        <form>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <input onChange={handleChange('name')} type="text" value={name} placeholder="Full Name" required="required" />
                    </div>
                </div>
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <input onChange={handleChange('email')} type="email" value={email} placeholder="Your Email" required="required" />
                        </div>
                    </div>
                        
                        <div className="col-lg-12 col-12">
                            <div className="form-group">
                                <textarea onChange={handleChange('message')} name="message" value={message} rows="6" placeholder="Type Your Message" ></textarea>
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
            <>

                <section className="breadcrumbs">
                    <div className="container">
                    <ToastContainer />
                        <div className="row">
                            <div className="col-12">
                                <h2><i className="fa fa-pencil"></i>Our Contact Details</h2>
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
                                    <h1>Contact Us</h1>
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
                                                    <h2>Send Message Us</h2>
                                                </div>
                                                {ContactForm()}
                                            </div>
                                        </div>
                                        {/* <!--/ End Contact Form -->
								<!-- Contact Address --> */}
                                        <div className="col-lg-4 col-12">
                                            <div className="contact-address">
                                                {/* <!-- Address --> */}
                                                <div className="contact">
                                                    <h2>Our Contact Address</h2>
                                                    <ul className="address">
                                                        <li><i className="fa fa-paper-plane"></i><span>Address: </span> Chandigarh, Punjab, India</li>
                                                        <li><i className="fa fa-phone"></i><span>Phone: </span>+91 9882094318</li>
                                                        <li className="email"><i className="fa fa-envelope"></i><span>Email: </span><a href="mailto:internwellofficial@gmail.com">internwellofficial@gmail.com</a></li>
                                                    </ul>
                                                </div>
                                                {/* <!--/ End Address -->
										<!-- Social --> */}
                                                <ul className="social">
                                                    <li className="active"><a href="https://m.facebook.com/internwell"><i className="fa fa-facebook"></i>Like Us facebook</a></li>
                                                    <li><a href="https://twitter.com/internwell"><i className="fa fa-twitter"></i>Follow Us twitter</a></li>
                                                    <li><a href="https://www.instagram.com/internwell/"><i className="fa fa-instagram"></i>Follow Us Instagram</a></li>
                                                    <li><a href="https://www.linkedin.com/company/internwell"><i className="fa fa-linkedin"></i>Follow Us linkedin</a></li>
                                                    {/* <!-- <li><a href="#"><i className="fa fa-behance"></i>Follow Us behance</a></li> --> */}
                                                </ul>
                                                {/* <!--/ End Social --> */}
                                            </div>
                                        </div>
                                        {/* <!--/ End Contact Address --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            )
}

            export default Contact;
