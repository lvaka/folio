import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page401 from './pages/Page401';
import Index from './pages/Index';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

const Routes = () => (
	<React.Fragment>
		<Router>
			<Navigation />
			<Switch>
				<Route path="/" exact={true} component={Index}/>
				<Route path="/about-me" exact={true} component={AboutMe} />
				<Route path="/contact" exact={true} component={Contact} />
				<Route component={Page401} status={401} />
			</Switch>
		</Router>
	</React.Fragment>
);

export default Routes;