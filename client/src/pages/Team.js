import React from 'react'
import NewTeam from './NewTeam';

const Team = () => {
	return (
		<>
			{/* <!-- Breadcrumbs --> */}
			<section className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2><i className="fa fa-pencil"></i>Our Leaders</h2>
							<ul>
								<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
								<li><a href="/"><i className="fa fa-clone"></i>Know More</a></li>
								<li className="active"><a href="/team"><i className="fa fa-clone"></i>Team</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Breadcrumbs --> */}

			{/* <!-- Start Team --> */}
			<section id="team" className="team section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title">
								<span className="title-bg">Team</span>
								<h1>Our Leaders</h1>
								<p style={{fontSize: "14px"}}>No description needed. But if description is necessary, the description will be Team internwell firmly believes that we cannot always build the future for our youth, but we can build our youth for the future.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="team-area">
					<div className="container">
						<div className="row">
							<div className=" col-lg-4 col-10  mx-auto ">
								{/* <!-- Single Team --> */}
								<div className="single-team">
									{/* <!-- Team Head --> */}
									<div className="img-area">
										<img src="../images/t3.jpg" className="img-responsive" alt="#" />
										<div className="social">
											<ul className="list-inline">
												<li><a href="https://www.linkedin.com/in/sachinkorla"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="https://instagram.com/loverespect_sachu"><i className="fa fa-instagram"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="img-text">
										<h4>Sachin Korla</h4>
										<p>Co-Founder</p>
									</div>
								</div>
							</div>


							<div className=" col-lg-4 col-10  mx-auto ">
								{/* <!-- Single Team --> */}
								<div className="single-team">
									{/* <!-- Team Head --> */}
									<div className="img-area">
										<img src="../images/m40.jpeg" className="img-responsive" alt="#" />
										<div className="social">
											<ul className="list-inline">
												<li><a href="https://www.linkedin.com/in/ayush-thakur-282000130/">
													<i className="fa fa-linkedin"></i>
												</a></li>
												<li><a href="https://www.instagram.com/ayush83461/">
													<i className="fa fa-instagram"></i>
												</a></li>
											</ul>
										</div>
									</div>
									<div className="img-text">
										<h4>Aayush Thakur</h4>
										<p>Co-Founder</p>
									</div>
									{/* <!-- Team Bottom --> */}

									{/* <!--/ End Team Bottom --> */}
								</div>
								{/* <!-- End Single Team --> */}
							</div>

						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Team --> */}

			{/* developers team starting */}
			<section id="team" className="team section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title">
								<h1>Our Developers</h1>
							</div>
						</div>
					</div>
				</div>
				<NewTeam />
				</section>
			{/* developers team ending */}
		</>
	)
}

export default Team;
