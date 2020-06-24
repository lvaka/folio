/*
Featured Image.
Loads thumbnail first, waits for larger size before displaying large size.
*/
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const FeaturedImg = props => {
  const [loaded, setLoaded] = useState(false)
  const full = props.full
  const classNames = ['full-width']

  useEffect(() => {
    const img = document.createElement('img')
    console.dir(img)
    img.onload = () => setLoaded(true)
    img.src = full
  }, [])

  if (!loaded) {
    classNames.push('loading')
  }

  return (
    <picture id='site-featured-img'>
      {loaded &&
        <>
          <source srcSet={props.full} />
          <source srcSet={props.full_jpeg} />
        </>}
      <img
        src={props.thumb}
        alt={props.alt}
        className={classNames.join(' ')}
      />
    </picture>
  )
}
FeaturedImg.propTypes = {
  full: PropTypes.string,
  full_jpeg: PropTypes.string,
  large: PropTypes.string,
  large_jpeg: PropTypes.string,
  thumb: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default FeaturedImg
