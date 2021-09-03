import React from 'react'

const SocietyInit = () => {
    return (
        <>
            {/* <!-- Breadcrumbs --> */}
		<section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Initiatives for Society</h2>
						<ul>
							<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
							<li><a href="/"><i className="fa fa-clone"></i>Social Initiative</a></li>
							<li className="active"><a href="/about"><i className="fa fa-clone"></i>Society Initiative</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Breadcrumbs -->
	
		<!-- Society Initiatives --> */}
        <section id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInUp">
                        <div className="section-title">
                            <span className="title-bg">Society</span>
                            <h1>What we have done yet</h1>
                            {/* <p>Sed lorem enim, faucibus at erat eget, laoreet tincidunt tortor.
                             Ut sed mi nec ligula bibendum aliquam. Sed scelerisque maximus magna, 
                             a vehicula turpis Proin</p> */}
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service mb-5">
						<i className="fa fa-rupee"></i>
							<h2><a href="/service">Fund Raisers</a></h2>
							<p>InternWell orgainsation always steps forward for helping the needy ones to raise funds who themselves cannot arrange that much money and are in urgent need of money but cannot reach out to those people </p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service mb-5">
							<i className="fa fa-magic"></i>
							<h2><a href="/service">COVID Volunteers</a></h2>
							<p>During this COVID-19 Pandemic, InternWell orgainsation has tried its best to reach out the needy ones, organising social camps, reaching out to doctors and hospitals, helping various patients also in arranging beds and other equipments.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service mb-5">
							<i className="fa fa-magic"></i>
							<h2><a href="/service">Donation in PM Cares Fund</a></h2>
							<p>During this COVID-19 Pandemic, InternWell orgainsation has also donated in PM Cares Fund which can be used for relief efforts against the coronavirus outbreak and similar pandemic like situations in the future</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service mb-5">
							<i className="fa fa-magic "></i>
							<h2><a href="/service">Vaccine Volunteers</a></h2>
							<p>InternWell orgainsation has also played a major role as a Vaccine Volunteer by guiding people at Vaccination sites, helps clinical team and administration in managing the patients and other stuff.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
				</div>            </div>
        </section>
        {/* <!--/ End Society Initiatives --> */}
        </>
    )
}

export default SocietyInit;
