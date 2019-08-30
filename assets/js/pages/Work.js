import React from 'react';
import {Link} from 'react-router-dom';
import WorkList from './Work/WorkList';

const Work = () => (
	<div id="work">
		<div className="container">
			<div className="col-md-8 offset-md-2">
			<h1 className="text-center">
				Some of My Work
			</h1>
			<div className="row">
				{WorkList.map((work, key)=>
					<div className="col-md-4 p-3 work-preview" 
						key={`Project-${key}`}>
						<Link to={work.page}>
							<img src={work.thumb} className="img-fluid" />
						</Link>
						<Link to={work.page}>
							<h4 className="text-center">
								{work.name}
							</h4>
						</Link>
						<h5 className="text-center"
							style={{fontWeight: 400}}>
							{work.tech}
						</h5>
					</div>
				)}
			</div>
			</div>
		</div>
	</div>
);

export default Work;