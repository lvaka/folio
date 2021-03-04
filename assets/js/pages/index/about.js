import React, { useState, useEffect } from 'react'
import SectionTitle from '../../components/section-title'

const BkgLoader = () => {
  const prev = '/static/images/bw-tree-prev.jpg'
  const full = '/static/images/bw-tree.jpg'
  const [style, setStyle] = useState({
    backgroundImage: `url(${prev})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '66.66%'
  })
  const [loaded, setLoaded] = useState(false)
  const blurClass = ['blur']

  const setFullImage = () => {
    setStyle({
      ...style,
      backgroundImage: `url(${full})`
    })
    setLoaded(true)
  }

  useEffect(() => {
    const img = document.createElement('img')
    img.onload = () => setFullImage()
    img.src = full
  }, [])

  if (loaded) {
    blurClass.push('off')
  }

  return (
    <div
      className={blurClass.join(' ')}
      style={style}
    />
  )
}

const About = () => (
  <section id='about-section' className='d-flex align-items-center'>
    <div className='container'>
      <SectionTitle title='About Me' subTitle='Let&apos;s get Personal' />
      <div className='row'>
        <div className='col-md-6'>
          <BkgLoader />
        </div>
        <div className='col-md-6 d-flex align-itmes-center py-4'>
          <div>
            <p>
              I am currently employed at&nbsp;
              <a
                href='https://rocket.farm'
                className='font-weight-bold'
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
              &nbsp;Rocket Farm
              </a> as a full stack web developer.
              Since starting with Rocket Farm, I've build many webpages
              for our partners with requirements ranging from a simple
              landing page to a complete e-commerce build.
            </p>
            <p>
              I may be a full time coder, but on my off days
              I enjoy exploring the world with my camera and
              taste buds.  I maintain a food photo blog on my
              main IG account&nbsp;
              <a
                href='https://instagram.com/l_vaka'
                className='font-weight-bold'
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
              &nbsp;L_vaka
              </a> and a street photography photoblog
              on my alternate account&nbsp;
              <a
                href='https://instagram.com/l_vaka_ronin'
                className='font-weight-bold'
                rel='noopener noreferrer nofollow'
                target='_blank'
              >
                L_vaka_ronin
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
