import React from 'react'
import PropTypes from 'prop-types'

const Skill = props => (
  <div className='skill' />
)
Skill.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
}

const Skills = () => (
  <div id='section-skills' className='my-5'>
    <div className='container'>
      <div className='row' />
    </div>
  </div>
)

export default Skills
