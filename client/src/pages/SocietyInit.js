import React from 'react'
import NewSocityInit from '../components/NewSocietyInit/NewSocityInit';

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
				
                <NewSocityInit />
			</div>
        </section>
        {/* <!--/ End Society Initiatives --> */}
        </>
    )
}

export default SocietyInit;
