import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/*
Generate Pagination Links
  params:
    pages - int number of pages
    page - current page,
    nextNum - next page
    prevNum - previous page,
    setPage - setPage onClick
*/
const paginate = (pages, page) => {
  const linkList = []

  if (page > 1) {
    linkList.push({
      link: true,
      display: '...',
      page: page - 1
    })
  }

  for (let i = page; i < pages + 1; i++) {
    if (page === i) {
      linkList.push({
        link: false,
        display: i,
        page: i
      })
    } else if (i > page + 3) {
      linkList.push({
        link: true,
        display: '...',
        page: i
      })
      break
    } else {
      linkList.push({
        link: true,
        display: i,
        page: i
      })
    }
  }
  return linkList
}

const PageLinks = props => {
  const [pageList, setPageList] = useState([])
  useEffect(() => {
    const newPageList = paginate(props.pages, props.page)
    setPageList(newPageList)
  }, [props.page])

  return (
    <ul className='page-links mt-3'>
      {props.prevNum
        ? <li>
          <button onClick={() => props.setPage(props.prevNum)}>
            <i className='fas fa-chevron-left' />
          </button>
          </li>
        : <li><i className='fas fa-chevron-left' /></li>}
      {pageList.map((page, k) =>
        page.link
          ? <li key={`pageLink-${k}`}>
            <button onClick={() => props.setPage(page.page)}>
              {page.display}
            </button>
            </li>
          : <li key={`pageLink-${k}`}>
            {page.display}
            </li>
      )}
      {props.nextNum
        ? <li>
          <button onClick={() => props.setPage(props.nextNum)}>
            <i className='fas fa-chevron-right' />
          </button>
          </li>
        : <li><i className='fas fa-chevron-right' /></li>}
    </ul>
  )
}
PageLinks.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  prevNum: PropTypes.number,
  nextNum: PropTypes.number,
  setPage: PropTypes.func.isRequired
}

export default PageLinks
