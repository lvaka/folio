import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page401 from './pages/Page401';
import Index from './pages/Index';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Work from './pages/Work';
import Camerata from './pages/Work/Camerata';
import MattNat from './pages/Work/MattNat';
import MiiNews from './pages/Work/MiiNews';

const Routes = () => (
	<React.Fragment>
		<Router>
			<Navigation />
			<Switch>
				<Route path="/" exact={true} component={Index}/>
				<Route path="/about-me" exact={true} component={AboutMe} />
				<Route path="/contact" exact={true} component={Contact} />
				<Route path="/work/camerata" exact={true} component={Camerata} />
				<Route path="/work/miinews" exact={true} component={MiiNews} />
				<Route path="/work/mattandnat" exact={true} component={MattNat} />
				<Route path="/work" exact={true} component={Work} />
				<Route component={Page401} status={401} />
			</Switch>
			<Footer />
		</Router>
	</React.Fragment>
);

export default Routes;