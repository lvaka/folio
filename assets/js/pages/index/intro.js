import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link to='/#about-section'>
                  Find Out About Me
                </Link>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <Link to='/#skills-section'>
                  I have unique set of skills...
                </Link>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <Link to='/#work-section'>
                  See My Work
                </Link>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <Link to='/#experience-section'>
                  My Experience
                </Link>
              </span>
            </li>
            <li>
              <span className='linkBox'>
                <Link to='/#contact-section'>
                  Contact Me
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
