import React from 'react'
import { elemScrollTo } from '../../lib/elem-scrollto'

const Intro = () => (
  <section id='section-intro' className='d-flex align-items-center'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='mb-0'>
                Hi, I'm Eric, a Full Stack Developer
          </h1>
          <p>
                I build and launch complete websites from
                start to finish.  I have experience deploying
                on Amazon AWS EC2 servers, building RESTful
                API's on Laravel and Django, and crafting
                responsive front ends with React.
          </p>
          <ul>
            <li>
              <span className='linkBox'>
                <a
                  href='#'
                  onClick={e => elemScrollTo(e, 'skills-section')}
                >
                  I have unique set of skills...
                </a>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <a
                  href='#'
                  onClick={e => elemScrollTo(e, 'work-section')}
                >
                      See My Work
                </a>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <a
                  href='#'
                  onClick={e => elemScrollTo(e, 'about')}
                >
                      Find Out About Me
                </a>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <a
                  href='#'
                  onClick={e => elemScrollTo(e, 'contact')}
                >
                      Contact Me
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
