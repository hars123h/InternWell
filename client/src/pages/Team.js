import React from 'react'

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
							<li><a href="/"><i className="fa fa-clone"></i>Pages</a></li>
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
							<p>The team of Internwell firmly believes that , “ we cannot always build the
								future for our youth but we can build our youth for the future .”</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							{/* <!-- Team Head --> */}
							<div className="t-head">
								<img src="../images/t3.jpg" alt="#" />
								<div className="t-icon">
									<a href="team-single.html"><i className="fa fa-plus"></i></a>
								</div>
							</div>
							{/* <!-- Team Bottom --> */}
							<div className="t-bottom">
								<p>Co-Founder</p>
								<h2>Sachin Korla</h2>
								<ul className="t-social">
									<li><a href="#/"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#/"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#/"><i className="fa fa-linkedin"></i></a></li>			
								</ul>
							</div>
							{/* <!--/ End Team Bottom --> */}
						</div>
						{/* <!-- End Single Team --> */}
					</div>		
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							{/* <!-- Team Head --> */}
							<div className="t-head">
								<img src="../images/t4.jpg" alt="#" />
								<div className="t-icon">
									<a href="team-single.html"><i className="fa fa-plus"></i></a>
								</div>
							</div>
							{/* <!-- Team Bottom --> */}
							<div className="t-bottom">
								<p>Co-Founder</p>
								<h2>Ayush Thakur</h2>
								<ul className="t-social">
									<li><a href="#/"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#/"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#/"><i className="fa fa-linkedin"></i></a></li>			
								</ul>
							</div>
							{/* <!--/ End Team Bottom --> */}
						</div>
						{/* <!-- End Single Team --> */}
					</div>		
				</div>
			</div>
		</section>
		{/* <!--/ End Team --> */}
        </>
    )
}

export default Team;
