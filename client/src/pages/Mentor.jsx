import React from 'react'
import { NavLink } from 'react-router-dom';
import MentorData from './MentorData';

const Mentor = () => {
	return (
		<>
			{/* <!-- Breadcrumbs --> */}
			<section className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2><i className="fa fa-pencil"></i>Our Mentors</h2>
							<ul>
								<li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
								<li><NavLink to="/"><i className="fa fa-clone"></i>Know More</NavLink></li>
								<li className="active"><a href="/mentor"><i className="fa fa-clone"></i>Mentors</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Breadcrumbs --> */}

			{/* <!-- Start Team --> */}
			<section id="mentor" className="mentor section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title">
								<span className="title-bg">Mentor</span>
								<h1>Our Mentors</h1>
								<p style={{fontSize: "14px"}}>No description needed, but if description is necessary : Our mentors are among the best experts in their fields</p>
							</div>
						</div>
					</div>
				</div>

                <div className="mentor-area">
                <div className="container">
                <div className="row">
                {
                    MentorData.map((elem) => {
                        return (
                            <div className=" col-lg-4 col-12 mx-auto mb-3" key={elem.id}>
                                <div className="single-mentor" >
                                    <div className="img-area">
                                        <img src={elem.imgsrc} className="img-responsive" alt="#" />

                                        <div className="social">
                                           <p>{elem.title}</p>
                                        </div>

                                    </div>
                                    <div className="img-text">
                                        <h4>{elem.name}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
                </div>
                </div>

			</section>
			{/* <!--/ End Team --> */}
		</>
	)
}

export default Mentor;
