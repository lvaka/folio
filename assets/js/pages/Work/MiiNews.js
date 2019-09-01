import React from 'react';
import BaseModel from './BaseModel';
import WorkList from './WorkList';

const Camerata = () => {

	const meta = WorkList.find(work => work.id === 'work-miinews');

	return (
		<BaseModel
			{...meta}
			>
			<p>
				Medical Insight is a medical research company that specializes 
				in the aesthetic industry.  They compile research journals 
				in the latest trends and technology in the aesthetic 
				community and sell them at a healthy price.  Once a year, 
				they host an event called the Aesthetic Forum and invite 
				key note speakers from the industry to speak.
			</p>
			<p>
				Their old site had dated static HTML and design concepts from 
				the 90's and their payment processor was a custom PHP script 
				that was a bit convoluted and incompatible with PHP 7.  We 
				helped maintain this old site before offering a complete 
				redesign.
			</p>
			<p>
				The goal was to combine their news letter, annual conference, 
				and ecommerce store into one unified webpage.  Their stipulation 
				was that they needed a very secure platform that would be 
				difficult to exploit and absolutely no WordPress due to having 
				fallen victim to an attack previously on that platform.
			</p>
			<p>
				I chose Django for the backend as Python has been proven to 
				be a very secure language and Django being a very mature 
				framework with a lot of security built in.  For the front end, 
				we used React to give a snappy user interface.
			</p>
			<p>
				The most challenging aspect was building the ecommerce portion 
				of the webapp as they used Elavon, their bank's prefered payment 
				processor.  As they are a bank specific pay processor there was 
				no existing examples of using their API.  In addition, their 
				team was located on the East Coast and it took some time to 
				communicate with them to set up a test sandbox.
			</p>
			<p>
				There were 3 ways in which to make a payment through Elavon's 
				API.  There was an easy one where you link externally to their site.  
				The previous PHP pay processor code utilized this technique with a 
				curl request that inserted the response into a seperate page.  I 
				disliked this approach as it broke our design aesthetic for the site.
				The second option was to use a JavaScript embed to create an 
				embeded iframe pay portal.  Once again, this interfered with our design. 
				The third and final option was to generate and send XML data.  As 
				this allowed us full control of the front end, this was the option 
				I chose.
			</p>
			<p>
				There was a benefit to using XML as all the payment occured in 
				the backend.  A major issue with Elavon's own implementation of 
				their pay processor is that anyone can edit the HTML on a page 
				to change the ammount they would be charged.  Anyone with some 
				basic HTML and developer tool knowledge could buy a $26k research 
				journal and edit the ammount to $1 in developer tools.  Having all 
				the payment and cart calculations happen in the backend gave a 
				bit more security on purchases.
			</p>
		</BaseModel>
	);
}
export default Camerata;