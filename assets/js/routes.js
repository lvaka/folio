import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page401 from './pages/page401'
import Index from './pages/index'
import Site from './pages/site'
import Navigation from './components/navigation'
import Footer from './components/footer'

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/site/:slug' exact component={Site} />
      <Route component={Page401} status={401} />
    </Switch>
    <Footer />
  </Router>
)

export default Routes
