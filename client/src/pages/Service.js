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
							ServicePara="In the current scenario, business and startus culture are growing rapidly especially in India and we provide digital solutions and help businesses grow by developing customized websites and apps."
						/>

                        <ServiceComponent
						ServiceImage="./images/service3.jpg" 
							ServiceTitle="Content Writing"
							ServicePara="The best way to improve your writing is to write continuously. Writing lots of content while working on various projects will help you understand the subtle distinctions between grammar, sentence constitution, and the overall structure of your writing."
						/>
						<ServiceComponent
							ServiceImage="./images/service1.jpeg" 
							ServiceTitle="Web Development"
							ServicePara="Websites form the heart of the Internet. Web development is the art of creating and hosting such websites on the Internet . It is one of the most important disciplines of modern computing and forms an integral part of any business."
						/>

						<ServiceComponent 
						ServiceImage="./images/service5.jpg" 
							ServiceTitle ="Digital Marketing"
							ServicePara="Digital marketing is a booming industry and learning under the supervision of experts will help you become a successful Digital Marketer. Skills are the key focus of any career, especially digital marketing. What are you waiting for? Come, learn new skills and get certified!"
						/>
						
						<ServiceComponent 
						ServiceImage="./images/service2.jpg" 
							ServiceTitle="App Development"
							ServicePara="App design combines a low-threshold entry into programming with the ability to create apps that make an impact. Joining this internship will help you learn how to solve hard logic problems and build interactive apps."
						/>
						<ServiceComponent 
						ServiceImage="./images/service6.png" 
							ServiceTitle="Social Media Marketing"
							ServicePara="Social media is one common platform where billions of users stay connected . It is not always easy to get your foot in the door when aiming to work in competitive fields like social media marketing."
						/>
						
					</div>
				</div>
			</section>
			

		</>
	)
}

export default Service;
