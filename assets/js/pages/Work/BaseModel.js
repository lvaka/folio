import React from 'react';
import {Link} from 'react-router-dom';

const BaseModel = props => (
	<div id={props.id} className="work">
		<div className="container">
			<div className="col-md-8 offset-md-2">
				<a href={props.link}>
					<img src={props.headerImage} className="img-fluid" />
				</a>
				<h1 className="mb-0">{props.name}</h1>
				<h4 className="mb-0">
					<span style={{fontWeight: 800}}>Technologies: </span>
				 	<span style={{fontWeight: 400}}>{props.tech}</span>
				</h4>
				<h4 className="mt-0">
					<span style={{fontWeight: 800}}>Website: </span>
			 		<a href={props.link}
			 			style={{fontWeight: 600}}>
		 				[<span className="linkBox">
		 					{props.name}
			 			</span>]
			 		</a>
				</h4>
				{props.children}
				<h4><Link to="/work" className="mt-5">
					<span className="linkBox">Back to Work</span>
				</Link></h4>
			</div>
		</div>
	</div>
);

export default BaseModel;