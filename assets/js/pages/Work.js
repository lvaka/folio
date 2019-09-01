import React from 'react';
import {Link} from 'react-router-dom';
import WorkList from './Work/WorkList';

const Work = () => (
	<div id="work">
		<div className="container">
			<h1 className="text-center">
				Some of My Work
			</h1>
			<div className="row">
				{WorkList.map((work, key)=>
					<div className="col-md-6 mb-4" 
						key={`Project-${key}`}>
						<div className="p-3 work-preview">
							<Link to={work.page}>
								<h2 className="text-center">
									{work.name}
								</h2>
							</Link>
							<Link to={work.page}>
								<img src={work.headerImage} className="img-fluid" />
							</Link>
							<h5 style={{fontWeight: 400, width: '100%'}}>
								<span className="mr-2" style={{fontWeight: 600}}>
									Technologies:
								</span> 
								{work.tech}
							</h5>
						</div>
					</div>
				)}
			</div>
		</div>
	</div>
);

export default Work;