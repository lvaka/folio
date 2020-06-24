import React from 'react'
import PropTypes from 'prop-types'

const Skill = props => (
  <div className='col-md-6 mt-3'>
    <div className='skill'>
      <i className={props.icon} />
      <div className='ml-3'>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  </div>
)
Skill.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
}

const Skills = () => (
  <section
    id='skills-section'
    className='my-5 d-flex align-items-center'
  >
    <div className='container'>
      <div className='section-title'>
        <h4 className='text-md-right'>
          I Can Be Pretty Handy
        </h4>
        <h2 className='text-md-right'>
          Skills
        </h2>
      </div>
      <div className='row'>
        <Skill
          icon='fab fa-js'
          title='JavaScript/React/jQuery'
          desc={
            'I can build beautiful, responsive, and reactive ' +
          'frontends with ReactJS.  I use both jQuery and vanilla JS ' +
          'for lighter weight front ends.'
          }
        />
        <Skill
          icon='fab fa-php'
          title='PHP/Laravel'
          desc={
            'I can build fullstack apps and RESTful APIs ' +
          'with Laravel.  I\'m dangerous enough to build my ' +
          'own reusable scripts and work with any system built ' +
          'with PHP.'
          }
        />
        <Skill
          icon='fab fa-python'
          title='Python/Django/Flask'
          desc={
            'I can build fullstack apps and RESTful APIs ' +
          'with Django and Flask microservices.  I try and make ' +
          'life easier by building apps to automate my more tedious ' +
          'tasks with Python.'
          }
        />
        <Skill
          icon='fab fa-sass'
          title='CSS/Sass'
          desc={
            'Though I can style any website with plain ole CSS, ' +
          'I love to script in Sass to create more readable and ' +
          'maintainable styling scripts.'
          }
        />
      </div>
    </div>
  </section>
)

export default Skills
