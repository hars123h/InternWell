import React from 'react'

const Internship = () => {
    return (
        <>

{/* <!-- Breadcrumbs --> */}
		<section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Internships</h2>
						<ul>
							<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
							<li><a href="#/"><i className="fa fa-clone"></i>Internship</a></li>
							<li className="active"><a href="/service"><i className="fa fa-clone"></i>Internship</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Breadcrumbs --> */}

        {/* <!-- Internships --> */}
		<section id="services" className="services archives section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<span className="title-bg">Internships</span>
							<h1>What we provide</h1>
							<p>We here at Internwell provide various internship programmes wherein interns get a chance to work on a number of live projects. 
							Being a part of live projects will serve as a medium for getting exposed to real
                             life challenges in this competitive world. We have a dedicated team of experts 
                             at Internwell who mentor and work tirelessly to guide the interns while working
                              on live projects .</p> <br /><br />
							<h6>We believe in rising by lifting others , so we require interns with minimum 
                            experience who want to work with utmost dedication .</h6>
                            {/* </p>
								</p> */}
                                <p>
									So make sure you at least have one internship on your resume before 
                                    leaving college to give you a leg up on the competition !!!!</p>
									<br />
								<h6>SO GET READY FOR EXPANDING YOUR KNOWLEDGE AND SKILLS WITH</h6> 
                                <h5>TEAM INTERNWELL !!</h5>
								
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="/service">Web Development</a></h2>
							<p>This is the area of our expertise. We have the best mentors available to make great user-friendly websites that will attract customers for your products. Through SEO optimisation we will make sure that the website is displayed amongst the top ones of searches.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-lightbulb-o"></i>
							<h2><a href="/service">Digital Marketing</a></h2>
							<p>Digital Marketing Industry is really booming . Our varied Digital Marketing services include Social Media Marketing, Content Marketing, Video Marketing and Online advertisements, etc. Through these services we will make sure that your outreach is as wide as possible. 
								</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-bullhorn"></i>
							<h2><a href="/service">Social Media Marketing</a></h2>
							<p>This is yet another in demand role now-a-days. Companies pay a lot to active social media managers who can creatively manage the social media platform of the company. Social Media is the biggest weapon for a company to advertise and increase its outreach.
								</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-magic "></i>
							<h2><a href="/service">Content Writing</a></h2>
							<p>Grow as a writer. The best way to improve your writing is to write continuously . Writing lots of content while working on various projects will help you to figure out about the subtle distinction of grammer, sentence constitution and the overall structure of your writing . It will also enable you to understand how different forms of writing impact different people.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="/service">App Development</a></h2>
							<p>We offer never before prices for cross platform app development for your enterprises. Apps can be used for a variety of purposes. The portability of Apps is helping enterprises track production stats and resources faster than ever. Apps offer widespread connectivity and can establish a direct bridge between the customer and the enterprise.
								</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Internships --> */}
            
        </>
    )
}

export default Internship;
