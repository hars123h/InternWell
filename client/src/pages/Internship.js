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
							<p style={{fontSize: "15px"}}><strong>For students :</strong> At internwell, interns get the opportunity of working on live internships.We equip our interns with in-demand skills and hands -on experience ..</p><br />
							<p style={{fontSize: "15px"}}><strong>For Businesses :</strong> We provide digital solutions and help businesses grow by developing customized websites and apps.</p> <br /><br />
							<h6>We believe in rising by lifting others , so we require interns with minimum 
                            experience who want to work with utmost dedication .</h6>
                            {/* </p>
								</p> */}
									<br />
								<h6>So get ready for expanding your knowledge and skills with</h6> 
                                <h5>TEAM INTERNWELL !!</h5>
								
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="/internForm">Web Development</a></h2>
							<p>Websites are the heart behind the working of the Internet. Hence the
								art of creating and hosting such websites on the Internet. It is one of the most important technical disciplines of modern computing and forms an integral part of any business.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-lightbulb-o"></i>
							<h2><a href="/internForm">Digital Marketing</a></h2>
							<p>Digital marketing is a booming industry and learning under the supervision of experts will help you become a successful Digital Marketer. Skills are the key focus of any career, especially digital marketing. What are you waiting for? Come, learn new skills and get certified!
								</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-bullhorn"></i>
							<h2><a href="/internForm">Social Media Marketing</a></h2>
							<p>Social media is one common platform where billions of users stay connected . It is not always easy to get your foot in the door when aiming to work in competitive fields like social media marketing. This is when an internship comes handy.One of the biggest benefits of acquiring a marketing internship is the chance to gain experience from people who are experts in this field .
								</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-magic "></i>
							<h2><a href="/internForm">Content Writing</a></h2>
							<p>Grow as a writer. The best way to improve your writing is to write continuously . Writing lots of content while working on various projects will help you to figure out about the subtle distinction of grammer, sentence constitution and the overall structure of your writing . It will also enable you to understand how different forms of writing impact different people.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="/internForm">App Development</a></h2>
							<p>App design combines a low-threshold entry to programming with the ability to create apps that will create an impact . Joining this internship can help you to Learn how to solve hard logic problems and build interactive apps.
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
