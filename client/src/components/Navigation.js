import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../auth/helpers';

const Navigation = ({ children, history, match }) => {
	

	return (
		<>
			<header id="header" className="header">

				<div className="middle-bar">
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-12">
								<div className="logo">
									<a href="/"><img src="../../images/internlogo.png" style={{ width: "100px" }} alt="logo" /></a>
								</div>
								<div className="link"><NavLink to="/"><img src="../../images/internlogo.png" style={{ width: "100px" }} alt="logo" /></NavLink></div>
								<button className="mobile-arrow"><i className="fa fa-bars"></i></button>
								<div className="mobile-menu"></div>
							</div>
							<div className="col-lg-10 col-12">
								<div className="mainmenu">
									<nav className="navigation">
										<ul className="nav menu">
											<li ><a href ="/">Home</a></li>
											<li ><a>Know More<i className="fa fa-caret-down"></i></a>
												<ul className="dropdown">
													<li><Link to="/about">About Us</Link></li>
													<li><Link to="/team">Our Team</Link></li>
													<li><Link to="/mentor">Our Mentor</Link></li>
													<li><Link to="/blogs">Blogs</Link></li>
												</ul>
											</li>
											<li><Link to="/services">Services</Link></li>
											<li><Link to="/internshp">Internship</Link></li>
											<li><a>Social Initiative<i className="fa fa-caret-down"></i></a>
												<ul className="dropdown">
													<li><Link to="/student-init">Initiative for Students</Link></li>
													<li><Link to="/society-init">Initiative for Society</Link></li>
												</ul>
											</li>
											<li><a href="/contact">Contact</a></li>
											{/* <li><Link to="/internForm">Intrn</Link></li> */}
											{!isAuth() && (
												<Fragment>
													{/* <li className="nav-item">
														<Link to="/signin" className="nav-link" >
															Signin
														</Link>
													</li> */}
													<li className="nav-item">
														<a href="/signup" className="nav-link" >
															Signup
														</a>
													</li>
												</Fragment>
											)}
											{isAuth() && isAuth().role === 'admin' && (
												<li className="nav-item">
													<Link className="nav-link"
														to="/admin">
														{isAuth().name}
													</Link>
												</li>
											)}

											{isAuth() && isAuth().role === 'student' && (
												<li className="nav-item">
													<Link className="nav-link"
														to="/private">
														{isAuth().name}
													</Link>
												</li>
											)}

											{isAuth() && (

												<li className="nav-item">
													<a
														style={{ cursor: 'pointer', color: '#000' }}
														onClick={() => {
															signout(() => {
																history.push("/")
															})
														}}
													>
														Signout

													</a>
												</li>
											)}

										</ul>
									</nav>

								</div>

							</div>
						</div>
					</div>
				</div>

			</header>

		</>
	)
}

export default withRouter(Navigation);
