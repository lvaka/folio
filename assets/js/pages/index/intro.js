import React from 'react'

const Intro = () => (
  <section id='section-intro' className='d-flex align-items-center'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='mb-0'>
                Hi, I'm Eric, a Full Stack Developer
          </h1>
          <p className="my-4">
            I build and launch complete websites from
            start to finish.  I have experience deploying
            on Amazon AWS EC2 servers, building RESTful
            API's on Laravel and Django, and crafting
            responsive front ends with React.
          </p>
          <ul className="social-list list-unstyled list-inline">
            <li className="list-inline-item">
              <a 
                href="https://github.com/l_vaka"
                rel="nofollow noreferrer noopener"
                target='_blank'
                >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a 
                href="https://www.linkedin.com/in/eric-shin-291979122/"
                rel="nofollow noreferrer noopener"
                target='_blank'
                >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
