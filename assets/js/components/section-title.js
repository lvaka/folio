import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'

const StyledTitle = styled.div`
  margin-bottom: 4rem;

  h2{
    margin-top: 0;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
  }
  h4{
    margin: 0;
    color: #363636;
  }

  @media (min-width: 768px){
    h2{
      font-size: 4.5rem;
      text-align: ${props => props.align}
    }
    h4{
      text-align: ${props => props.align}
    }
  }
`
StyledTitle.propTypes = {
  align: PropTypes.string
}
StyledTitle.defaultProps = {
  align: 'left'
}

const SectionTitle = props => {
  const titleRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const titleContainer = titleRef.current
    const title = titleContainer.children[1]
    const subTitle = titleContainer.children[0]

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer,
        start: 'top center'
      }
    })

    tl.to(title, {
      opacity: 1,
      duration: 0.5,
      y: 0
    })
      .to(subTitle, {
        opacity: 1,
        duration: 0.3,
        x: 0
      })
  }, [])

  return (
    <StyledTitle ref={titleRef} align={props.align}>
      <h4 style={{
        opacity: 0,
        transform: `translateX(${props.align === 'left' ? '-' : ''}100px)`
      }}
      >
        {props.subTitle}
      </h4>
      <h2 style={{ opacity: 0, transform: 'translateY(100px)' }}>{props.title}</h2>
    </StyledTitle>
  )
}
SectionTitle.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}
SectionTitle.defaultProps = {
  align: 'left'
}

export default SectionTitle
