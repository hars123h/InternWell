import React from 'react'
import { NavLink } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
        <section className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2><i className="fa fa-pencil"></i>Our Blogs</h2>
						<ul>
							<li><NavLink to="/"><i className="fa fa-home"></i>Home</NavLink></li>
							<li><NavLink to="/"><i className="fa fa-clone"></i>Know More</NavLink></li>
							<li className="active"><a href="/blogs"><i className="fa fa-clone"></i>Blogs</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
        <section id="mentor" className="mentor section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<span className="title-bg">Blogs</span>
							<h1>Our Blogs</h1>
							<p>The team of Internwell firmly believes that , “ we cannot always build the future for our youth but we can build our youth for the future .”</p>
						</div>
					</div>
				</div>
			</div>
        </section>
        </>
    )
}

export default Blogs
