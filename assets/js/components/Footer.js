import React from 'react';

const today = new Date();
const year = today.getFullYear();

const Footer = () => (
	<footer className="py-2 mt-5">
		<div className="container-fluid footer">
			<h5 className="text-center my-0">Eric Shin - {year}</h5>
		</div>
	</footer>
);

export default Footer;