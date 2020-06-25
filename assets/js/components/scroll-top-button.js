import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { elemScrollTo } from '../lib/elem-scrollto'

const ScrollTopButton = () => {

  const [show, setShow] = useState(false)

  const toggleButton = () => {
    const scrollPos = window.scrollY
    const innerHeight = window.innerHeight

    if(scrollPos > (innerHeight * 0.75)){
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const checkHash = () => {
    if(!window.location.hash){
      elemScrollTo('#section-intro')
    } 
  }

  useEffect(()=>{
    toggleButton()
    window.addEventListener('scroll', toggleButton)

    return () => {
      window.removeEventListener('scroll', toggleButton)
    }
  },[])

  return(
    <Link 
      to='/' 
      id="scroll-top-button"
      onClick={checkHash}
      className={show ? 'show' : ''}>
      <i className="fas fa-long-arrow-alt-up"></i>
    </Link>
  )
}

export default ScrollTopButton