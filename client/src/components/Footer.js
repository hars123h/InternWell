import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Footer = () => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Subscribe now !'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {

        setValues({ ...values, [name]: event.target.value });
    };


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/newsLetter`,
            data: { email },

        })
            .then(response => {
                console.log('NewsLetter Submitted Successfully !', response);
                setValues({ ...values, email: '', buttonText: 'Created' });
                console.log(values)


                toast.success(' Submitted  Successfully');


            })
            .catch(error => {
                console.log('ERROR ON SAVING  IN DATABASE', error.response.data.error);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };
    return (
        <> 
        <ToastContainer />
            <footer id="footer" className="footer wow fadeIn">

                <div className="top-arrow">
                    <a href="#header" className="btn"><i className="fa fa-angle-up"></i></a>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-widget about">
                                    <h2>Office Location</h2>
                                    <p>Chandigarh, Punjba, India</p>
                                    <ul className="list">
                                        {/* <!-- <li><i className="fa fa-map-marker"></i>Address: House 20, Sector-7, Road-5, California, US</li> --> */}
                                        <li><i className="fa fa-phone"></i> +91 9882094318</li>
                                        <li><i className="fa fa-envelope"></i><a href="mailto:internwellofficial@gmail.com"> internwellofficial@gmail.com</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-widget links">
                                    <h2>Quick Links</h2>
                                    <ul className="list">
                                        <li><a href="about"><i className="fa fa-caret-right"></i>About Our Company</a></li>
                                        <li><a href="/services"><i className="fa fa-caret-right"></i>Our Services</a></li>
                                        <li><a href="/internshp"><i className="fa fa-caret-right"></i>Our Internships</a></li>
                                        {/* <li><a href="https://medium.com/@internwellofficial"><i className="fa fa-caret-right"></i>Latest Blog</a></li> */}
                                        <li><a href="/team"><i className="fa fa-caret-right"></i>Our Team</a></li>
                                        {/* <li><a href="society-init.html"><i className="fa fa-caret-right"></i>Social Initiatives</a></li>
                                        <li><a href="students-init.html"><i className="fa fa-caret-right"></i>Sotudents Initiatives</a></li> */}
                                        {/* <li><a href="contact.html"><i className="fa fa-caret-right"></i>Contact With Us</a></li> */}
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-widget twitter">
                                    <h2>Recent Tweets</h2>
                                    <div className="single-tweet">
                                        {/* <i className="fa fa-twitter"></i> */}
                                        <p><a href="https://twitter.com/InternWell/status/1406988025934925831">@Internwell</a>*Yoga is not a work-out, it is a work-in. And this is the point of spiritual practice; to make us teachable; to open up our hearts and focus our awareness</p>
                                    </div>
                                    <div className="single-tweet">
                                        {/* <i className="fa fa-twitter tweet-sym"></i> */}
                                        <p><a href="https://twitter.com/InternWell/status/1406501040787103744">@Internwell</a>wishes Happy Father’s Day to all the fathers who are patient, loving, dedicated, hard-working, generous, and funny.</p>
                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-widget newsletter">
                                    <h2>Newsletter</h2>
                                    <p>Subscribe to our Newsletter and get to hear more about us</p>
                                    <form>
                                        <input onChange={handleChange('email')} value={email} type="email" placeholder="Your Email" />
                                        <button type="button" onClick={clickSubmit} className="button primary">{buttonText}</button>
                                    </form>

                                    {/* <form>
                           
                        <input type="email" placeholder="Your Email" onChange={handleChange('name')} />
                            <button type="button" onClick={clickSubmit} className="button primary">{buttonText}</button>
                        </form>	 */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bottom-top">

                                    <ul className="social">
                                        <li><a href="https://m.facebook.com/internwell"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/internwell"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/internwell"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/internwell/"><i className="fa fa-instagram"></i></a></li>

                                    </ul>

                                    <div className="copyright">
                                        <p>&copy; 2021 All Right Reserved. Design & Development By <a href="https://internwell.com" target="_blank" rel="noreferrer" >Internwell</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
