import React from 'react'
import NewStudentInit from '../components/NewStudentInit/NewStudentInit';

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
                        </div>
                    </div>
                </div>
                <br /><br />
				<NewStudentInit />
            </div>
        </section>
    </>
    )
}

export default StudentInit;
