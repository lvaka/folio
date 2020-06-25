import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import '../sass/style.scss'

const Root = props => <Routes {...props} />

if (document.getElementById('root')) {
  ReactDOM.render(<Root />, document.getElementById('root'))
}
