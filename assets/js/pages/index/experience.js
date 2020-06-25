import React from 'react'
import PropTypes from 'prop-types'

const experiences = [
  {
    position: 'Fullstack Web Developer',
    company: 'Rocket Farm',
    url: 'https://rocket.farm',
    employDate: 'April 2018 - Current',
    roles: [
      'Build RESTful API\'s for SPAs',
      'Develop apps with Django and Laravel Frameworks',
      'Construct frontend views with React JS',
      'Maintain and patch sites for clients'
    ]
  },
  {
    position: 'General Manager',
    company: 'Chego',
    url: 'https://eatchego.com',
    employDate: 'April 2014 – February 2018',
    roles: [
      'Transitioned administrative work from pen and paper ' + 
      'to more efficient digital cloud-based system.',
      'Provided coaching and mentorship for new recruits'
    ]
  },
  {
    position: 'Photography Director',
    company: 'Platful',
    employDate: 'March 2015 – July 2017',
    roles: [
      'Worked with developers to create key features ' + 
      'for future users.',
      'Created a catalog of photographs to set a base ' + 
      'standard of photo quality for users to follow.'
    ]
  },
  {
    position: 'Technology Advisor',
    company: 'Kogi BBQ',
    url: 'https://kogibbq.com',
    employDate: 'November 2008 – April 2014',
    roles: [
      'Developed and maintained Wordpress site.',
      'Collaborated and developed brand identity ' + 
      'and online presence.'
    ]
  }
]

const ExperienceCard = props => (
  <div className='experience-card'>
    <h2 className="mb-0">
      { props.position }
    </h2>
    {props.url && 
      <h4 className="mt-0 mb-2">
        <a 
          href={ props.url }
          rel="noopener noreferrer nofollow"
          target='_blank'
        >
        { props.company }
        </a>
      </h4>
    }
    {!props.url &&
      <h4 className="mt-0 mb-2">
        { props.company }
      </h4>
    }
    <div className='row'>
      <div className='col-md-8 order-2 order-md-1'>
        <ul className="mt-0">
          {props.roles.map((role, k)=>
              <li key={`exp-role-${k}`}>
                {role}
              </li>
            )}
        </ul>
      </div>
      <div className='col-md-4 order-1 order-md-2 text-md-right'>
        <small className="mb-2">
          <i>{ props.employDate }</i>
        </small>
      </div>
    </div>
  </div>
)
ExperienceCard.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  url: PropTypes.string,
  employDate: PropTypes.string,
  roles: PropTypes.array
}

const Experience = () => (
  <section 
    id='experience-section' 
    className="d-flex align-items-center"
  >
    <div className="container">
      <div className='section-title'>
        <h4 className="text-md-right">Let's get Personal</h4>
        <h2 className="text-md-right display-3">About Me</h2>
      </div>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          {experiences && 
            experiences.map((exp, k) =>
              <ExperienceCard 
                key={`exp-${k}`}
                {...exp}
              />
          )}
        </div>
      </div>
    </div>
  </section>
)

export default Experience