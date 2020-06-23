import React from 'react'

const About = () => (
  <section id='about-section' className='d-flex align-items-center'>
    <div className='container'>
      <div className='section-title'>
        <h4>Let's get Personal</h4>
        <h2>About Me</h2>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <h4>Images</h4>
        </div>
        <div className='col-md-6 d-flex align-itmes-center py-4'>
          <div>
            <p>
              I am currently employed at&nbsp;
              <a
                href='https://rocket.farm'
                className='font-weight-bold'
                rel='nofollow'
              >
              &nbsp;Rocket Farm
              </a> as a fullstack web developer.
              Since starting with Rocket Farm, I've build many webpages
              for our partners with requirements ranging from a simple
              landing page to a complete e-commerce build.
            </p>
            <p>
              I may be a full time coder, but on my off days
              I enjoy exploring the world with my camera and
              taste buds.  I maintain a food photoblog on my
              main IG account&hbsp;
              <a
                href='https://instagram.com/l_vaka'
                className='font-weight-bold'
                rel='nofollow'
              >
              &nbsp;L_vaka
              </a> and a street photography photoblog
              on my alternate account&nbsp;
              <a
                href='https://instagram.com/l_vaka_ronin'
                className='font-weight-bold'
                rel='nofollow'
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
