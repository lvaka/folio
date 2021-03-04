import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'

const StyledPicture = styled.picture`
  background-size: cover,
  background-image: ${props => `url(${props.defaultImg})`}
  position: relative;
  width: 100%;
  height: 100%;
  img{
    position: absolute;
    width: auto;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
StyledPicture.propTypes = {
  defaultImg: PropTypes.string.isRequired
}

const LazyLoadImage = props => {
  const pictureRef = useRef()
  const [inView, setInView] = useState(false)

  const srcSet = {
    full: props.full,
    fullJpeg: props.full_jpeg,
    thumb: props.thumb
  }
  if (props.large) {
    srcSet.large = props.large
    srcSet.largeJpeg = props.large_jpeg
  }
  if (props.med) {
    srcSet.med = props.med
    srcSet.medJpeg = props.med_jpeg
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pictureRef.current,
        start: 'top center',
        onEnter: () => setInView(true)
      }
    })
    tl.to(pictureRef.current, {
      opacity: 0,
      duration: 0,
      y: 100
    })
      .to(pictureRef.current, {
        opacity: 1,
        duration: 0.4,
        y: 0
      })
  }, [pictureRef])

  useEffect(() => {

  }, [])

  return (
    <StyledPicture defaultImg={props.defaultImg} ref={pictureRef}>
      {inView &&
        <>
          <source
            media='(min-width: 2048px)'
            srcSet={srcSet.full}
          />
          <source
            media='(min-width: 2048px)'
            srcSet={srcSet.fullJpeg}
          />
        </>}
      {inView && srcSet.large !== null &&
        <>
          <source
            media='(min-width: 1200px)'
            srcSet={srcSet.large}
          />
          <source
            media='(min-width: 1200px)'
            srcSet={srcSet.largeJpeg}
          />
        </>}
      {inView && srcSet.med !== null &&
        <>
          <source
            media='(min-width: 200px)'
            srcSet={srcSet.med}
          />
          <source
            media='(min-width: 200px)'
            srcSet={srcSet.medJpeg}
          />
        </>}
      {inView &&
        <source srcSet={srcSet.thumb} />}
      <img
        className={props.className}
        src={props.defaultImg}
        alt={props.alt}
      />
    </StyledPicture>
  )
}
LazyLoadImage.propTypes = {
  defaultImg: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string
}

export default LazyLoadImage
