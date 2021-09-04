import React from 'react'
import { ToastContainer } from 'react-toastify'

const InternForm = () => {

const handleChange = () => {
    
}

const message = () => {

}

const clickSubmit = () => {

}

const buttonText = () => {

}

    const SendDetailForm = () => (
        <form>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <textarea onChange={handleChange('')} type="text" value={""} placeholder="Why should we hire you?" required="required" />
                    </div>
                </div>

                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <textarea onChange={handleChange('')} type="text" value={""} placeholder="How did you hear about this opportunity ?" required="required" />
                        </div>
                    </div>

                    <div class="col-12">
						<div class="form-group">
							<select name="subject">
							<option class="option" value="1">Web Development</option>
							<option class="option" value="2">Digital Marketing</option>
							<option class="option" value="3">Social Media Marketing</option>
							<option class="option" value="4">App Development</option>
						    <option class="option" value="5">Content Writer</option>
							</select>
						</div>
					</div>

                        <div className="col-lg-12 col-12">
                            <div className="form-group">
                                <textarea onChange={handleChange('message')} name="message" value={message} rows="6" placeholder="Tell us your life story within 100 words" ></textarea>
                            </div>
                        </div>

                        <div class="col-lg-12 col-12">
							<div class="form-group">
							<input type="url" placeholder="Your LinkedIn Profile" required="required" />
							</div>
						</div>

						<div class="col-lg-12 col-12">
							<div class="form-group">
							<input type="url" placeholder="Your Resume (optional)" />
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
