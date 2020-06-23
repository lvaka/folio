import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

const LazyLoadImage = props => {

  const pictureRef = useRef()
  const [inView, setInView] = useState(false)

  const bkg = {
    backgroundImage: `url(${props.defaultImg})`,
    backgroundSize: 'cover'
  }

  const srcSet = {
    full: props.full,
    fullJpeg: props.full_jpeg,
    thumb: props.thumb
  }
  if (props.large){
    srcSet.large = props.large
    srcSet.largeJpeg = props.large_jpeg
  }
  if (props.med){
    srcSet.med = props.med,
    srcSet.medJpeg = props.med_jpeg
  }
  const checkIfInView = () => {
    const winH = window.screen.availHeight
    if(pictureRef.current){

      const windowPos = window.scrollY
      const elemPos = pictureRef
        .current
        .getBoundingClientRect()
        .top

      if(winH > elemPos){
        setInView(true)
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', checkIfInView)
    checkIfInView()

    return () => {
      window.removeEventListener('scroll', checkIfInView)
    }
  },[pictureRef]);

  if(inView){
    bkg.backgroundImage = null
  }

  return (
    <picture style={bkg} ref={pictureRef}>
      {inView && 
        <>
          <source media="(min-width: 2048px)"
            srcSet={srcSet.full}/>
          <source media="(min-width: 2048px)"
            srcSet={srcSet.fullJpeg}/>
        </>
      }
      {inView && srcSet.large !== null && 
        <>
          <source media="(min-width: 1200px)"
            srcSet={srcSet.large}/>
          <source media="(min-width: 1200px)"
            srcSet={srcSet.largeJpeg}/>
        </>
      }
      {inView && srcSet.med !== null && 
        <>
          <source media="(min-width: 200px)"
            srcSet={srcSet.med}/>
          <source media="(min-width: 200px)"
            srcSet={srcSet.medJpeg}/>
        </>
      }
      {inView && 
        <source srcSet={srcSet.thumb}/>
      }
      <img 
        className="img-fluid"
        src={props.defaultImg}
        alt={props.alt}/>
    </picture>
  )
}
LazyLoadImage.propTypes = {
  defaultImg: PropTypes.string.isRequired
}

export default LazyLoadImage