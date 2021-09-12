import React from 'react'
import { NavLink } from 'react-router-dom';
import NewBlogs from '../components/NewBlogs/NewBlogs';

const Blogs = () => {
    return (
        <>
        <section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Our Blogs</h2>
						<ul>
							<li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
							<li><NavLink to="/"><i className="fa fa-clone"></i>Know More</NavLink></li>
							<li className="active"><a href="/blogs"><i className="fa fa-clone"></i>Blogs</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
        <section id="mentor" className="mentor section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<span className="title-bg">Blogs</span>
							<h1>Our Blogs</h1>
							<p>The team of Internwell firmly believes that , “ we cannot always build the future for our youth but we can build our youth for the future .”</p>
						</div>
					</div>
				</div>
				<div className="row">
						<NewBlogs
						BlogImage="./images/blog1.png" 
						BlogTitle="Towards Skilldom"
						BlogPara="An 18-day online course that will help you shape your dreams into reality. The nation is currently in a lockdown, but don’t worry, the internet and electricity are still active. Our online course will help you connect to experts from various fields of education."
						BlogVisit="https://www.peachblink.com/internwell"
						/>

                        <NewBlogs
						BlogImage="./images/info1.png" 
						BlogTitle="InternWell"
						BlogPara="A part of being a person is about helping others. Helping one person might not change the whole world but it can definitely change the world for one person. This time we bring to you the story of a start-up that laid its foundation on the motto of “work for all while leaving no one behind”; "
						BlogVisit="https://medium.com/towards-skilldom/internwell-dd9a4e6459fe"
						/>
						<NewBlogs
						BlogImage="./images/blog3.jpg" 
						BlogTitle="InternWell - A Socio Startup"
						BlogPara="InternWell is a Socio-Startup whose vision is “Work for all while leaving no one behind“. It offers a range of digital services, including Web and App development, Social media marketing, Content Writing, Freelancing, etc. that can be advantageous to SMEs to upscale their business."
						BlogVisit="https://bhojpuriaentrepreneur.wpcomstaging.com/2020/07/30/internwell/"
						/>
				</div>
			</div>
        </section>
        </>
    )
}

export default Blogs
