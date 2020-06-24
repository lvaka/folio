import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import { truncate } from '../../lib/truncate'
import LazyLoadImage from '../../lib/lazy-load-image'

const Site = props => {
  return (
    <div className='col-md-4 mt-3'>
      <div className='featured-img-container'>
        <div className='featured-img'>
          {props.featured &&
            <Link to={`/site/${props.slug}`}>
              <LazyLoadImage
                defaultImg='/static/images/gray-pixel.gif'
                {...props.featured}
              />
            </Link>}
        </div>
      </div>
      <Link
        to={`/site/${props.slug}`}
        className='site-preview-title'
      >
        <h4>{props.title}</h4>
      </Link>
      {props.url &&
        <a
          href={props.url}
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          <strong>{props.url}</strong>
        </a>}
      <p>{truncate(props.content)}</p>
      <p>[
        <span className='linkBox'>
          <Link to={`/site/${props.slug}`}>
        Read More...
          </Link>
        </span>]

      </p>
    </div>
  )
}
Site.propTypes = {
  featured: PropTypes.object,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string.isRequired
}

const Work = () => {
  const [loading, setLoading] = useState(true)
  const [sites, setSites] = useState([])
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState(null)

  const loaderClasses = ['loader-container']

  if (loading) {
    loaderClasses.push('active')
  }

  const loadSites = () => {
    axios.get('/site-manager/list-sites')
      .then(res => {
        setSites(res.data.site_items)
        setPagination({
          nextNum: res.data.next_num,
          prevNum: res.data.prev_num,
          page: res.data.page,
          pages: res.data.pages
        })
      })
      .then(() => setLoading(false))
      .catch(e => console(e))
  }

  useEffect(() => {
    if (!loading) {
      setLoading(true)
    }
    loadSites()
  }, [page])

  return (
    <section
      id='work-section'
      className='my-5 d-flex align-items-center'
    >
      <div className={loaderClasses.join(' ')}>
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
      <div className='container'>
        <div className='section-title'>
          <h4 className='text-md-right'>
                      Some of the things I've done.
          </h4>
          <h2 className='text-md-right'>
                      Projects
          </h2>
          <div className='row'>
            {sites &&
                        sites.map((site, k) =>
                          <Site
                            {...site}
                            key={`site-${site.id}`}
                          />
                        )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
