import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = props => {
  const display = props.status ? 'd-flex' : 'd-none'

  return (
    <div id='mobile-menu' className={display}>
      <div id='name'>
        <h1>
          <Link
            to='/'
            onClick={() => props.setStatus(false)}
          >
            Eric J. Shin
          </Link>
        </h1>
      </div>
      <div
        className='close-button'
        onClick={() => props.setStatus(false)}
      >
        <span />
        <span />
      </div>
      <ul className='m-0 p-0'>
        <li>
          <span className='linkBox'>
            <Link
              to='/#about-section'
              onClick={() => props.setStatus(false)}
            >
              About
            </Link>
          </span>
        </li>
        <li>
          <span className='linkBox'>
            <Link
              to='/#skills-section'
              onClick={() => props.setStatus(false)}
            >
              Skills
            </Link>
          </span>
        </li>
        <li>
          <span className='linkBox'>
            <Link
              to='/#work-section'
              onClick={() => props.setStatus(false)}
            >
              Work
            </Link>
          </span>
        </li>
        <li>
          <span className='linkBox'>
            <Link
              to='/#experience-section'
              onClick={() => props.setStatus(false)}
            >
              Experience
            </Link>
          </span>
        </li>
        <li>
          <span className='linkBox'>
            <Link
              to='/#contact'
              onClick={() => props.setStatus(false)}
            >
              Contact
            </Link>
          </span>
        </li>
      </ul>
    </div>
  )
}

const Navigation = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false)

  return (
    <>
      <div id='top-menu'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h2>
                <Link to='/'>
                  Eric J. Shin
                </Link>
              </h2>
            </div>
            <div className='col-6 d-flex'>
              <ul className='ml-auto d-none d-md-flex'>
                <li>
                  <span className='linkBox'>
                    <Link to='/#about-section'>
                      About
                    </Link>
                  </span>
                </li>
                <li>
                  <span className='linkBox'>
                    <Link to='/#skills-section'>
                      Skills
                    </Link>
                  </span>
                </li>
                <li>
                  <span className='linkBox'>
                    <Link to='/#work-section'>
                      Work
                    </Link>
                  </span>
                </li>
                <li>
                  <span className='linkBox'>
                    <Link to='/#experience-section'>
                      Experience
                    </Link>
                  </span>
                </li>
                <li>
                  <span className='linkBox'>
                    <Link to='/#contact-section'>
                      Contact
                    </Link>
                  </span>
                </li>
              </ul>
              <div
                className='hamburger d-block d-md-none'
                onClick={() => setMobileMenuStatus(true)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

          </div>
        </div>
      </div>
      <MobileMenu status={mobileMenuStatus} setStatus={setMobileMenuStatus} />
    </>
  )
}

export default Navigation
