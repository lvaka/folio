import React, { useState, useEffect } from 'react'
import FeaturedImg from '../lib/featured-image'
import axios from 'axios'

const Site = props => {
  const [site, setSite] = useState(null)
  const [loading, setLoading] = useState(true)
  const slug = props.match.params.slug
  const loadingClasses = ['loader-container']

  const getSite = () => {
    axios.get(`/site-manager/site/${slug}`)
      .then(res => setSite(res.data))
      .then(() => setLoading(false))
      .catch(e => console.log(e))
  }

  useEffect(() => getSite(), [])

  if (loading) {
    loadingClasses.push('active')
  }

  return (
    <section id='page-site'>
      <div className={loadingClasses.join(' ')}>
        <div className='text-center'>
          <div className='lds-spinner'>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {site && site.featured !== null &&
            <FeaturedImg {...site.featured} />}
          {site &&
            <div id='site-content'>
              <h1 className='mb-0'>{site.title}</h1>
              {site.url !== null &&
                <a
                  href={site.url}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  <h4 className='mt-0'>{site.url}</h4>
                </a>}
              <div
                id='site-page-content'
                dangerouslySetInnerHTML={{ __html: site.content }}
              />
            </div>}
        </div>
      </div>
    </section>
  )
}

export default Site
