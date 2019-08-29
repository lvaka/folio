import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AboutMe = () => {

	const extractMedia = media => {
		return media.display_url;
	}

	const [images, setImages] = useState([]);

	useEffect(()=>{
		axios.get('https://www.instagram.com/l_vaka/?__a=1')
		.then(res => {
			const mediaList = [];
			const media = res.data.graphql.user.edge_owner_to_timeline_media.edges;
			for(let item of media){
				mediaList.push(item.node.thumbnail_src);
			}
			return mediaList;
		})
		.then(mediaList => {
			axios.get('https://www.instagram.com/l_vaka_ronin/?__a=1')
			.then(res => {
				const media = res.data.graphql.user.edge_owner_to_timeline_media.edges;
				for(let item of media){
					mediaList.push(item.node.thumbnail_src);
				}
				setImages(mediaList);
			})
			.catch(e => console.log(e))
		})
		.catch(e => console.log(e))
	},[]);

	return(
		<div id="about-me">
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<h1 className="mt-0">Let's Get Personal</h1>
						<p>
							I am currently employed at <a href="https://rocket.farm" className="font-weight-bold">
							Rocket Farm</a> as a full-time creative web developer.  
							Since starting with Rocket Farm, I've build many webpages 
							for our partners with requirements ranging from a simple 
							landing page to a complete e-commerce build.  
						</p>
						<p>
							I love running <b>Ubuntu</b> at home and on the <b>AWS EC2</b> servers 
							that I set up, but am perfectly comfortable running 
							on <b>CentOS</b> or any other flavor of Linux.
						</p>
						<p>
							My favorite language is <b>Python</b>, but I'm well versed 
							in <b>Javascript</b> and <b>PHP</b> as well.  Before my current position, 
							I knew very little PHP, but with many of our clients at work 
							running <b>WordPress</b> sites, I picked it up as well 
							as <b>Laravel</b> for some of our more complicated projects.  
							I'm pretty open to different tech stacks and enjoy those ureka 
							moments when I figure out something new.
						</p>
						<p>
							I may be a full time coder, but on my off days 
							I enjoy exploring the world with my camera and 
							taste buds.  Here's some of the stuff I've taken photos 
							of recently.
						</p>
						<a href="https://instagram.com/l_vaka" rel="noopener noreferrer" target="_blank">
							<div className="image-gallery pb-5">
								{images.map((image, key) =>
									<div key={key}>
										<img src={image} className="img-fluid" />
									</div>
								)}
							</div>
						</a>
					</div>

				</div>
			</div>
		</div>
	);
}

export default AboutMe;