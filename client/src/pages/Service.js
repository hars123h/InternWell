import React from 'react'

const Service = () => {
    return (
        <>
            {/* <!-- Breadcrumbs --> */}
		<section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Our Services</h2>
						<ul>
							<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
							<li><a href="#/"><i className="fa fa-clone"></i>Services</a></li>
							<li className="active"><a href="/service"><i className="fa fa-clone"></i>Service</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Breadcrumbs --> */}


        {/* <!-- Services --> */}
		<section id="services" className="services archives section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<span className="title-bg">Services</span>
							<h1>What we provide</h1>
							<p><b><i>"Opportunities don’t happen , you create them."</i></b><br />
							Internwell is one such place where you can unlock your potential in a way that was never before possible.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-magic"></i> */}
							<h2><a href="/service">Business Consulting</a></h2>
							<p>In the current scenario, business and startus culture are growing rapidly especially in India and thats why we have bring this consulting service in which we will help people with their business development and other things related to grow their market value.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-lightbulb-o"></i> */}
							<h2><a href="/service">Content Writing</a></h2>
							<p>Content Writers are in huge demand across the nation. It is one of the fastest growing roles in the modern industry’s scenario. The need of creative content is growing each day. Little knowledge of SEO and correct usage of language along with a hint of creativity goes a long way.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-wordpress"></i> */}
							<h2><a href="service-single.html">Web Development</a></h2>
							<p>This is the area of our expertise. We have the best mentors available to make great user-friendly websites that will attract customers for your products. Through SEO optimisation we will make sure that the website is displayed amongst the top ones of searches. InternWell also makes use of latest web development technologies like React to build dynamic websites.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-bullhorn "></i> */}
							<h2><a href="service-single.html">Digital Marketing</a></h2>
							<p>Our varied Digital Marketing services include Social Media Marketing, Content Marketing, Video Marketing and Online advertisements, etc. Through these services we will make sure that your outreach is as wide as possible.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-magic"></i> */}
							<h2><a href="service-single.html">App Development</a></h2>
							<p>We offer never before prices for cross platform app development for your enterprises. Apps can be used for a variety of purposes. The portability of Apps is helping enterprises track production stats and resources faster than ever. Apps offer widespread connectivity and can establish a direct bridge between the customer and the enterprise.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-lightbulb-o"></i>
							<h2><a href="service-single.html">Social Media Marketing</a></h2>
							<p>This is yet another in demand role now-a-days. Companies pay a lot to active social media managers who can creatively manage the social media platform of the company. Social Media is the biggest weapon for a company to advertise and increase its outreach. This is a great skill to have in your resume.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Services --> */}
	


        </>
    )
}

export default Service;
