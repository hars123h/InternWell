import React from 'react'

const StudentInit = () => {
    return (
        <>
           {/* <!-- Breadcrumbs --> */}
		<section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Initiatives for Students</h2>
						<ul>
							<li><a href="/"><i className="fa fa-home"></i>Home</a></li>
							<li><a href="/"><i className="fa fa-clone"></i>Social Initiative</a></li>
							<li className="active"><a href="/about"><i className="fa fa-clone"></i>Students Initiative</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Breadcrumbs -->
	
		<!-- Student Initiatives --> */}
        <section id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInUp">
                        <div className="section-title">
                            <span className="title-bg">Students</span>
                            <h1>What we have done yet</h1>
                            <p>Sed lorem enim, faucibus at erat eget, laoreet tincidunt tortor.
                             Ut sed mi nec ligula bibendum aliquam. Sed scelerisque maximus magna,
                              a vehicula turpis Proin</p>
                        </div>
                    </div>
                </div>

                <div className="row">
					<div className="col-lg-6 col-md-6">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-magic"></i> */}
							<h2><a href="/service">InternWell Mentorship Program</a></h2>
							<p>In the current scenario, business and startus culture are growing rapidly especially in India and thats why we have bring this consulting service in which we will help people with their business development and other things related to grow their market value.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-6 col-md-6">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							{/* <i className="fa fa-lightbulb-o"></i> */}
							<h2><a href="/service">Skilldom 2.0</a></h2>
							<p>Content Writers are in huge demand across the nation. It is one of the fastest growing roles in the modern industry’s scenario. The need of creative content is growing each day. Little knowledge of SEO and correct usage of language along with a hint of creativity goes a long way.</p>
						</div>
						{/* <!-- End Single Service --> */}
					</div>
                </div>
            </div>
        </section>
        {/* <!--/ End Student Initiatives --> */}
        </>
    )
}

export default StudentInit;
