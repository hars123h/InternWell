import React from 'react'

const Footer = () => {
    return (
        <>
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
                            <li><i className="fa fa-headphones"></i>Phone: +91 9882094318</li>
                            <li><i className="fa fa-headphones"></i>Email:<a href="mailto:internwellofficial@gmail.com">internwellofficial@gmail.com</a></li>
                        </ul>	
                    </div>
                   
                </div>	
                <div className="col-lg-4 col-md-6 col-12">
              
                    <div className="single-widget links">
                        <h2>Quick Links</h2>
                        <ul className="list">
                            <li><a href="about-us.html"><i className="fa fa-caret-right"></i>About Our Company</a></li>
                            <li><a href="services.html"><i className="fa fa-caret-right"></i>Our Services</a></li>
                            <li><a href="internship.html"><i className="fa fa-caret-right"></i>Our Internships</a></li>
                            <li><a href="https://medium.com/@internwellofficial"><i className="fa fa-caret-right"></i>Latest Blog</a></li>
                            <li><a href="team.html"><i className="fa fa-caret-right"></i>Our Team</a></li>
                            <li><a href="society-init.html"><i className="fa fa-caret-right"></i>Social Initiatives</a></li>
                            <li><a href="students-init.html"><i className="fa fa-caret-right"></i>Sotudents Initiatives</a></li>
                            <li><a href="contact.html"><i className="fa fa-caret-right"></i>Contact With Us</a></li>
                        </ul>
                    </div>
                   
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  
                    <div className="single-widget twitter">
                        <h2>Recent Tweets</h2>
                        <div className="single-tweet">
                            <i className="fa fa-twitter"></i>
                            <p><a href="https://twitter.com/InternWell/status/1406988025934925831">@Internwell</a>*Yoga is not a work-out, it is a work-in. And this is the point of spiritual practice; to make us teachable; to open up our hearts and focus our awareness</p>
                        </div>
                        <div className="single-tweet">
                            <i className="fa fa-twitter"></i>
                            <p><a href="https://twitter.com/InternWell/status/1406501040787103744">@Internwell</a>wishes Happy Father’s Day to all the fathers who are patient, loving, dedicated, hard-working, generous, and funny.</p>
                        </div>
                    
                    </div>
                   
                </div>
                {/* <div className="col-lg-3 col-md-6 col-12">
                    
                    <div className="single-widget newsletter">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our Newsletter and get to hear more about us</p>
                        <form>
                            <input placeholder="Your Name" type="text">
                            <input placeholder="your email" type="email">
                            <button type="submit" className="button primary">Subscribe Now!</button>
                        </form>	
                    </div>
                   
                </div> */}
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
                            <p>&copy; 2021 All Right Reserved. Design & Development By <a href="https://internwell.com" target="_blank"rel="noreferrer" >Internwell</a></p>
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
