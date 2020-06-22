import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page401 from './pages/page401'
import Index from './pages/index'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Work from './pages/Work'
import Camerata from './pages/Work/Camerata'
import MattNat from './pages/Work/MattNat'
import MiiNews from './pages/Work/MiiNews'

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/work/camerata' exact component={Camerata} />
      <Route path='/work/miinews' exact component={MiiNews} />
      <Route path='/work/mattandnat' exact component={MattNat} />
      <Route path='/work' exact component={Work} />
      <Route component={Page401} status={401} />
    </Switch>
    <Footer />
  </Router>
)

export default Routes
