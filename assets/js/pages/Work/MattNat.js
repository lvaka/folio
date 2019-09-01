import React from 'react';
import BaseModel from './BaseModel';
import WorkList from './WorkList';

const MattNat = () => {

	const meta = WorkList.find(work => work.id === 'work-mattnat');

	return (
		<BaseModel
			{...meta}
			>
			<p>
				Matt and Nat bakery is the wholesale division of 
				Rossmoor Pastries and service many big companies up 
				and down the California coast including Yahoo, Disney, 
				and Dreamworks
			</p>
			<p>
				This is one of my earliest projects I worked on when I 
				joined Rocket Farm.  I was provided with design templates 
				and did a complete visual overhaul of the website.
			</p>
			<p>
				The client also requested a digital catalog that clients could 
				access and build wishlists to request estimates.  One of 
				the requirements was to not show any pricing as each client 
				has a different rate depending on the product.  I leveraged 
				the power of WooCommerce and skinned it in a way to 
				display skus of the various options and to create a wishlist 
				instead of a shopping cart which gets sent to the ordering 
				manager in the shop. 
			</p>
			<p>
				I'm currently working on some more exciting webapps that are 
				unfortunately not open to the public such as a complete cake 
				order builder with payment processing done through stripe.  
				That whole project is being built with Laravel and React.  
				It's pretty exciting, but it is a shame I'll never be able 
				to use it in my portfolio.
			</p>
		</BaseModel>
	);
}
export default MattNat;