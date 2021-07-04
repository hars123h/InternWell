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
							<p>Sed lorem enim, faucibus at erat eget, laoreet tincidunt tortor.
                            
                             Ut sed mi nec ligula bibendum aliquam. Sed scelerisque maximus magna,
                              a vehicula turpis Proin</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-magic"></i>
							<h2><a href="/service">Consulting</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod
                             tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-lightbulb-o"></i>
							<h2><a href="/service">Creative Idea</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                            tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="service-single.html">Development</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                            tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-bullhorn "></i>
							<h2><a href="service-single.html">Marketing</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                            tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-magic"></i>
							<h2><a href="service-single.html">Consulting</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-lightbulb-o"></i>
							<h2><a href="service-single.html">Creative Idea</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-wordpress"></i>
							<h2><a href="service-single.html">Development</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-bullhorn "></i>
							<h2><a href="service-single.html">Marketing</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">	
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<i className="fa fa-bullseye "></i>
							<h2><a href="service-single.html">Direct Work</a></h2>
							<p>welcome to our consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt a tristique tortor maximus</p>
						</div>
						{/* <!-- End Single Service -->	 */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Services --> */}
	


        </>
    )
}

export default Service;
