import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page404 from './pages/Page404';
import Index from './pages/Index';

const Routes = props => {
	return(
		<Router>
			<Switch>
				<Route path="/" exact={true} component={Index}/>
				<Route component={Page404} status={404} />
			</Switch>
		</Router>
	);
}

export default Routes;