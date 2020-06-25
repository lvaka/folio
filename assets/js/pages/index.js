import React, {useEffect} from 'react'
import About from './index/about'
import Intro from './index/intro'
import Skills from './index/skills'
import Work from './index/work'
import Experience from './index/experience'
import Contact from './index/contact'
import {elemScrollTo} from '../lib/elem-scrollto'

const Index = props => {
  const hash = props.location.hash

  useEffect(()=>{
    if(hash){
      elemScrollTo(hash)
    } else {
      elemScrollTo('#section-intro')
    }
  },[hash])

  return (
    <div id='page-index'>
      <Intro />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
    </div>
  )
}

export default Index
