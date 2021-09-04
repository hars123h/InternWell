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
                {/* <div className="row">
					<div className="col-lg-6 col-md-6 ">
						<div className="single-service student-card mb-5">
							<h1 style={{fontSize: "30px", color: "#015ac2"}}>InternWell Mentorship Program</h1><br /><br />
                            <h4>About Initiative:</h4>
							<p>InternWell presents a “6 months mentorship program”. Get connected to some great experts from various domains utilizes a wide range of resources such as internship opportunities, insights from the experiments of Internwell, course materials, etc. <br/>
                            And Get trained for a sparkling future ahead; on behalf of Internwell.</p>
                            <br />
                            <h4>What you get:</h4>
                            <ul>
                                <li>Upskilling</li>
                                <li>Carrer Guidance</li>
                                <li>Personal query resolutions</li>
                                <li>and much more</li>
                            </ul>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-service student-card">
							<h1 style={{fontSize: "30px", color: "#015ac2"}}>Skilldom 2.0</h1> <br /><br />
                            <h4>About Initiative:</h4>
							<p>An 18 – day online course that will help you shape your dreams into reality. The nation is currently on lockdown but don’t worry, the internet and electricity are still active. Many students wait for a time when no one will stop them from pursuing their passion.</p> <br />
                            <p>One of the major highlights of this event will be that mentors not only from India but also from all around the globe will impart their knowledge and experiences with us.
                            Experts from various fields of education will connect to students. Main mission of this event is to provide exposure and guidance to students, especially those belonging to tier-3 colleges, so that they can grab every opportunity that comes their way .</p>
						</div>
					</div>
                </div> */}
				<NewStudentInit />
            </div>
        </section>
    </>
    )
}

export default StudentInit;
