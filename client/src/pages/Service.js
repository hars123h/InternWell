import React from 'react'
import { Link } from 'react-router-dom';
import ServiceComponent from '../components/Services/ServiceComponent';

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
								<li className="active"><Link to="/services"><i className="fa fa-clone"></i>Service</Link></li>
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
						<ServiceComponent
						ServiceImage="./images/slider/gallery-image2.jpg" 
							ServiceTitle="Business Consulting"
							ServicePara="In the current scenario, business and startus culture are growing rapidly especially
							 in India and thats why we have bring this consulting service
							 in which we will help people with their business development and other 
							 things related to grow their market value"
						/>

                        <ServiceComponent
						ServiceImage="./images/service3.jpg" 
							ServiceTitle="Content Writing"
							ServicePara="Content Writers are in huge demand across the nation. It is one of the fastest growing
							roles in the modern industry’s scenario. The need of creative content is growing each day. 
							Little knowledge 
							of SEO and correct usage of language along with a hint of creativity goes a long way"
						/>
						<ServiceComponent
							ServiceImage="./images/service1.jpeg" 
							ServiceTitle="Web Development"
							ServicePara="This is the area of our expertise. We have the best mentors available to make great user-friendly
							 websites that will attract customers for your products. Through SEO optimisation we will make sure that 
							 the website is displayed amongst the top ones of searches."
						/>

						<ServiceComponent 
						ServiceImage="./images/service5.jpg" 
							ServiceTitle ="Digital Marketing"
							ServicePara="Our varied Digital Marketing services include Social Media Marketing, Content Marketing,
							 Video Marketing and Online advertisements, etc.
							 Through these services we will make sure that your outreach is as wide as possible"
						/>
						
						<ServiceComponent 
						ServiceImage="./images/service2.jpg" 
							ServiceTitle="App Development"
							ServicePara="We offer never before prices for cross platform app development for your enterprises.
							 Apps can be used for a variety of purposes. The portability of Apps is helping enterprises track production stats
							  and resources faster than ever.
							Apps offer widespread connectivity and can establish a direct bridge between the customer and the enterprise"
						/>
						<ServiceComponent 
						ServiceImage="./images/service6.png" 
							ServiceTitle="Social Media Marketing"
							ServicePara="This is yet another in demand role now-a-days. Companies pay a lot to active social media managers who can creatively manage the social media platform of the company.
							 Social Media is the biggest weapon for a company to advertise and increase its outreach. 
							 This is a great skill to have in your resume"
						/>
						
					</div>
				</div>
			</section>
			

		</>
	)
}

export default Service;
