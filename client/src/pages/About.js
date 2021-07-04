import React from 'react'

const About = () => {
    return (
        <>
           {/* <!-- Breadcrumbs --> */}
		<section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>About Our Company</h2>
						<ul>
							<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
							<li><a href="/"><i className="fa fa-clone"></i>Pages</a></li>
							<li className="active"><a href="/about"><i className="fa fa-clone"></i>About Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Breadcrumbs --> */}

        {/* <!-- About Us --> */}
		<section className="about-us section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<span className="title-bg">Radix</span>
							<h1>About Company</h1>
							<p>
								A Socio-Startup that aims to provide digital solutions to the SMEs & let
                                 their businesses soar to new heights by getting developed customised
                                  Websites & Apps, by the budding interns who in turn get a chance to hone
                                   their skills & become future ready.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-12">
						{/* <!-- Video --> */}
						<div className="about-video">
							<div className="single-video overlay">
								<a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="video-popup mfp-fade"><i className="fa fa-play"></i></a>
								<img src="../images/gallery-4.jpg" alt="#" />
							</div>
						</div>
						{/* <!--/ End Video --> */}
					</div>
					<div className="col-lg-6 col-12">
						{/* <!-- About Content --> */}
						<div className="about-content">
							<h2>A world className platform for the young undergrads to scale up their skills & potentials !!</h2>
							<p>Internships are a great way to showcase skillset to employers. They provide with experience of how the industry works & functions. Working on a live project provides a cutting edge over the competitors as it adds up as a bonus to the resume. We here at InternWell provide interns with hands-on experience on the projects that we take up from SMEs under the mentorship of experts from our team.</p>
							<p>Based on the performance, the interns might also receive some stipend. We require the interns to have some basic know-how of the desired work before applying for, as the interns will get to worl real-life projects that we obtain from an enterprises. Furthermore, we have a dedicated team of experts who mentor and guide the interns working on the live projects. Our team members make sure that the projects are carved with perfection and delivered before the deadline.</p>

							<p>We require people who have good enough skills, have minimum experience, and can dedicate enough time to the company. InternWell in its starting stages will be providing experience and a great platform to develop your skills at the ease of your home. Interested? Drop us a message and we will look into it...</p>
						</div>
						{/* <!--/ End About Content --> */}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="progress-main">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Single Skill --> */}
									<div className="single-progress">
										<h4>Development & Marketing</h4>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "78%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">78%</span></div>
										</div>
									</div>
									{/* <!--/ End Single Skill --> */}
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Single Skill --> */}
									<div className="single-progress">
										<h4>Business Develop</h4>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">80%</span></div>
										</div>
									</div>
									{/* <!--/ End Single Skill --> */}
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Single Skill --> */}
									<div className="single-progress">
										<h4>Creative Work</h4>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">90%</span></div>
										</div>
									</div>
									{/* <!--/ End Single Skill --> */}
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Single Skill --> */}
									<div className="single-progress">
										<h4>Social Initiatives</h4>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="percent">95%</span></div>
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
		{/* <!--/ End About Us --> */}
      

        
        </>
    )
}

export default About;
