import Client from '../components/OurClient/Client'
import Testimonial from "../components/Testimonial/Testimonial"

const Home = () => {
    return (
        <>
            <section id="hero-area" className="hero-area">
                {/* Slider */}
                <div className="slider-area">
                    {/* Single Slider  */}
                    <div className="single-slider" style={{ backgroundImage: "url('../images/slider/slider-image1.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-12">
                                    {/* <!-- Slider Text --> */}
                                    <div className="slider-text">
                                        <h1>InternWell <span>Business</span> World That Possible anything<span>!</span></h1>
                                        <p style={{fontSize: "15px"}}>Our vision is to build a strong bridge between the world of education and the world of work by equipping students with the right skills and ideas. </p>
                                        <div className="button">
                                            <button className="btn">Our Portfolio</button>
                                            <button className="btn video video-popup mfp-fade"><i className="fa fa-play"></i>Play Now</button>
                                        </div>
                                    </div>
                                    {/* <!--/ End Slider Text --> */}
                                </div>
                                <div className="col-lg-5 col-md-6 col-12">
                                    {/* <!-- Image Gallery --> */}
                                    <div className="image-gallery">
                                        <div className="single-image">
                                            <img src="../images/slider/gallery-image1.jpg" alt="hwlllo" />
                                        </div>
                                        <div className="single-image two">
                                            <img src="../images/slider/gallery-image2.jpg" alt="#" />
                                        </div>
                                    </div>
                                    {/* <!--/ End Image Gallery --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ End Single Slider --> */}
                    {/* <!-- Single Slider --> */}
                    <div className="single-slider slider-right" style={{ backgroundImage: "url('../images/slider/slider-image2.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-12">
                                    {/* <!-- Image Gallery --> */}
                                    <div className="image-gallery">
                                        <div className="single-image">
                                            <img src="../images/slider/gallery-image1.jpg" alt="#" />
                                        </div>
                                        <div className="single-image two">
                                            <img src="../images/slider/gallery-image2.jpg" alt="#" />
                                        </div>
                                    </div>
                                    {/* <!--/ End Image Gallery --> */}
                                </div>
                                <div className="col-lg-7 col-md-6 col-12">
                                    {/* <!-- Slider Text --> */}
                                    <div className="slider-text text-right">
                                        <h1>InternWell <span>Business</span> World That Possible anything<span>!</span></h1>
                                        <p style={{fontSize: "35px"}}>An initiative by students, for students.
                                        </p>
                                        <div className="button">
                                            <button className="btn">Our Services</button>
                                            <button className="btn video video-popup mfp-fade"><i className="fa fa-play"></i>Play Now</button>
                                        </div>
                                    </div>
                                    {/* <!--/ End Slider Text --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ End Single Slider --> */}
                    {/* <!-- Single Slider --> */}
                    <div className="single-slider slider-center" style={{ backgroundImage: "url('../images/slider/slider-image1.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 col-12">
                                    {/* <!-- Slider Text --> */}
                                    <div className="slider-text text-center">
                                        <h1>Build your business with InternWell </h1>
                                        <p style={{fontSize: "15px"}}>Our vision is to boost <b>ENTREPRENEURSHIP</b> in India by exposing the
                                            young minds to the actual work skills required in today’s time.
                                            We need to ensure that we learn to pursue our passion because it will
                                            inspire us and drive us to improve ourselves .</p>
                                        <div className="button">
                                            <button className="btn">About Company</button>
                                            <button className="btn video video-popup mfp-fade"><i className="fa fa-play"></i>Play Now</button>
                                        </div>
                                    </div>
                                    {/* <!--/ End Slider Text --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ End Single Slider --> */}
                </div>
                {/* <!--/ End Slider --> */}
            </section>
            {/* <!--/ End Hero Area -->
<!-- About Us --> */}
            <section className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title wow fadeInUp">
                                <span className="title-bg">InternWell</span>
                                <h1>About Company</h1>
                                <p style={{fontSize: "13px"}}>A Socio-Startup that aims to provide digital solutions to the SMEs & let their
                                    businesses soar to new heights by getting developed customised Websites & Apps,
                                    by the budding interns who in turn get a chance to hone their skills & become future
                                    ready.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 wow fadeInLeft" data-wow-delay="0.6s">
                            {/* <!-- Video --> */}
                            <div className="about-video">
                                <div className="single-video overlay">
                                    {/* <!-- <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="video-popup mfp-fade"><i className="fa fa-play"></i></a> --> */}
                                    <img src="../images/gallery-4.jpg" alt="#" />
                                </div>
                            </div>
                            {/* <!--/ End Video --> */}
                        </div>
                        <div className="col-lg-6 col-12 wow fadeInRight" data-wow-delay="0.8s">
                            {/* <!-- About Content --> */}
                            <div className="about-content">
                                <h2 style={{color: "#000"}}>A world className platform for the young undergrads to scale up their skills & potentials !!</h2>
                                <p style={{fontSize: "14px"}}>We are a socio-startup by and for students whose goal is to provide digital solutions to SMEs and help their businesses soar to new heights by developing customized Websites & Apps, developed by budding interns who in turn get opportunities to hone their skills and become future ready.Most of the companies have left a major part of the society, the underprivileged behind. We wish to help this section grow & develop their lifestyle by upgrading their technical skills and enhancing employability. We aim to invest our time and about 20% of our investments towards thissocial venture.</p>
                                <p style={{fontSize: "14px"}}>An excellent way to learn new skills while honing existing ones. We give you firsthand knowledge of how the industry works and functions. Working on a live project gives you an advantage because it counts as a bonus on your resume. InternWell provides interns with hands-on experience on projects that we take on from SMEs, all while being mentored by experts.</p>

                                <p style={{fontSize: "14px"}}>We require interns to have a basic know-how of the desired work before applying, as they will be working on real-world projects we obtain from businesses. We have a dedicated team of experts who mentor and guide the interns working on live projects. Our team members ensure that the projects are carved to perfection and delivered before the deadline.</p>
                            </div>
                            {/* <!--/ End About Content --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="progress-main">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                        {/* <!-- Single Skill --> */}
                                        <div className="single-progress">
                                            <h4>Development & Marketing</h4>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "78%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">78%</span></div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Skill --> */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
                                        {/* <!-- Single Skill --> */}
                                        <div className="single-progress">
                                            <h4>Business Develop</h4>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">80%</span></div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Skill --> */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
                                        {/* <!-- Single Skill --> */}
                                        <div className="single-progress">
                                            <h4>Creative Work</h4>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">90%</span></div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Skill --> */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="1s">
                                        {/* <!-- Single Skill --> */}
                                        <div className="single-progress">
                                            <h4>Social Initiatives</h4>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">95%</span></div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Skill --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End About Us -->
        <!-- Services --> */}
            <section id="services" className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow fadeInUp">
                            <div className="section-title">
                                <span className="title-bg">Services</span>
                                <h1>What we provide</h1>
                                <p style={{fontSize: "13px"}}>At internwell, interns get the opportunity of working on live internships.We equip our interns with in-demand skills and hands -on experience .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="service-slider">
                                {/* <!-- Single Service --> */}
                                <div className="single-service">
                                    <i className="fa fa-magic"></i>
                                    <h2><a href="/service">Digital Marketing</a></h2>
                                    <p>Digital marketing is a booming industry and learning under the supervision of experts will help you become a successful Digital Marketer. Skills are the key focus of any career, especially digital marketing. What are you waiting for? Come, learn new skills and get certified!</p>
                                </div>
                                {/* <!-- End Single Service -->
                            <!-- Single Service --> */}
                                <div className="single-service">
                                    <i className="fa fa-desktop" aria-hidden="true"></i>
                                    <h2><a href="/service">Web Development</a></h2>
                                    <p>Websites form the heart of the Internet. Web development is the art of creating and hosting such websites on the Internet . It is one of the most important disciplines of modern computing and forms an integral part of any business.
                                    </p>
                                </div>
                                {/* <!-- End Single Service -->
                            <!-- Single Service --> */}
                                <div className="single-service">
                                    <i className="fa fa-android" aria-hidden="true"></i>
                                    <h2><a href="/service"> App Development</a></h2>
                                    <p>App design combines a low-threshold entry to programming with the ability to create apps that will create an impact . Joining this internship can help you to Learn how to solve hard logic problems and build interactive apps.</p>
                                </div>
                                {/* <!-- End Single Service -->
                            <!-- Single Service --> */}
                                <div className="single-service">
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>

                                    <h2><a href="/service">Content Writers</a></h2>
                                    <p>Grow as a writer. The best way to improve your writing is to write continuously. Writing lots of content while working on various projects will help you understand the subtle distinctions between grammar, sentence constitution, and the overall structure of your writing. It will also enable you to understand how different forms of writing affect different people.</p>
                                </div>
                                {/* <!-- End Single Service -->
                            <!-- Single Service --> */}
                                <div className="single-service">
                                    <i className="fa fa-share-square-o" aria-hidden="true"></i>
                                    <h2><a href="/service">Social Media Maketing</a></h2>
                                    <p>Social media is one common platform where billions of users stay connected . It is not always easy to get your foot in the door when aiming to work in competitive fields like social media marketing. This is when an internship comes handy.One of the biggest benefits of acquiring a marketing internship is the chance to gain experience from people who are experts in this field</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Services -->

        <!-- Partners --> */}
           <Client />
            {/* <!--/ End Partners --></div> */}

            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <span className="title-bg">Testimonial</span>
                        <h1>Our Clients</h1>
                    </div>
                </div>
                <Testimonial />
            </section>
        </>
    )

}

export default Home;