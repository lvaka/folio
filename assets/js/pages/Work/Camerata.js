import React from 'react';
import BaseModel from './BaseModel';
import WorkList from './WorkList';

const Camerata = () => {

	const meta = WorkList.find(work => work.id === 'work-camerata');

	return (
		<BaseModel
			{...meta}
			>
			<p>
				The client, Long Beach Camerata Singers, is a non-profit 
				singing troupe made up of local community members.  They 
				first came to us with an outdated WordPress website with 
				dated design and a lack of features with many frequently 
				updated portions of the site hard coded into the theme.
			</p>
			<p>
				We revamped the entire look of the site with a brand new 
				design and theme.  I built a few custom plugins to match 
				the design spec I was given and integrated a few custom 
				meta options for special post-types.
			</p>
			<p>
				Their old site was hosted on a dated GoDaddy server that 
				did not allow PHP 7 which made it incompatible with the 
				theme we chose and it could not be upgraded without 
				spending a substantial amount of money to migrate to a 
				new server.  I decided to migrate everything to an AWS 
				Ubuntu server to be able to have full control over the 
				environment and avoid having to pay for basic things like 
				SSL certificates, scheduled backups, and git deploys.
			</p>
			<p>
				Moving to AWS improved performance substantially, and 
				automating SSL renewals and MYSQL dumps saved our client 
				money.  The monthly running cost of the server went down 
				to 0 while using Amazon's free tier EC2 instance.
			</p>
			<p>
				The Long Beach Camerata Singers decided to keep us on 
				retainer to make periodic content updates and maintenance.
			</p>
		</BaseModel>
	);
}
export default Camerata;