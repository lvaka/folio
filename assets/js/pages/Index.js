import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
	return(
		<div id="index">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<h1 className="mb-0">
							Hi, I'm Eric, a Full Stack Developer
						</h1>
						<p>
							I build and launch complete websites from 
							start to finish.  I have experience deploying 
							on Amazon AWS EC2 servers, building RESTful 
							API's on Laravel and Django, and crafting 
							responsive front ends with React.
						</p>
						<ul>
							<li>
								<span className="linkBox">
									<Link to="/work">
										See My Work
									</Link>
								</span>
							</li>
							<li>
								<span className="linkBox">
									<Link to="/about-me">
										Find Out About Me
									</Link>
								</span>
							</li>
							<li>
								<span className="linkBox">
									<Link to="/contact">
										Contact Me
									</Link>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;