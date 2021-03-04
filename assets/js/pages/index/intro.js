import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import SplitText from '../../lib/split-text'

const Intro = () => {
  const titleRef = useRef()
  const textRef = useRef()
  const listRef = useRef()

  const initializeWords = words => {
    words[0].style.transform = 'translateY(50px)'
    words[0].style.opacity = 0
    words[1].style.transform = 'translateY(-50px)'
    words[1].style.opacity = 0
    words[2].style.opacity = 0
    words[3].style.opacity = 0
    words[4].style.opacity = 0
    words[4].style.transform = 'translateY(50px)'
    words[5].style.opacity = 0
    words[5].style.transform = 'translateY(50px)'
  }

  const animateTitle = () => {
    const words = titleRef.current.children
    const socialIcons = listRef.current.children
    initializeWords(words)

    const tl = gsap.timeline()
    tl.to(words[0], {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 0.6
    })
      .to(words[1], {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(words[2], {
        opacity: 1,
        duration: 0.6
      })
      .to(words[3], {
        opacity: 1,
        duration: 0.2
      })
      .to(words[4], {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 0.6
      })
      .to(words[5], {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(socialIcons[0], {
        opacity: 1,
        x: 0,
        duration: 0.3
      })
      .to(socialIcons[1], {
        opacity: 1,
        x: 0,
        duration: 0.3
      })
  }

  useEffect(() => {
    SplitText(titleRef.current)
    animateTitle()
  }, [])

  return (
    <section id='section-intro' className='d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h1 className='mb-0' ref={titleRef}>
              Hi, I'm Eric, a Web Developer
            </h1>
            <p className='my-4' ref={textRef} style={{ opacity: 0, transform: 'translateY(50px)' }}>
              I build and launch complete websites from
              start to finish.  I have experience deploying
              on Amazon AWS EC2 servers, building RESTful
              API's on Laravel and Django, and crafting
              responsive front ends with React.
            </p>
            <ul className='social-list list-unstyled list-inline' ref={listRef}>
              <li className='list-inline-item' style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <a
                  href='https://github.com/l_vaka'
                  rel='nofollow noreferrer noopener'
                  target='_blank'
                >
                  <i className='fab fa-github' />
                </a>
              </li>
              <li className='list-inline-item' style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <a
                  href='https://www.linkedin.com/in/eric-shin-291979122/'
                  rel='nofollow noreferrer noopener'
                  target='_blank'
                >
                  <i className='fab fa-linkedin' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
