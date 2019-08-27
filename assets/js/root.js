import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => <h1>hello</h1>

if (document.getElementById('root')){
	ReactDOM.render(<Root />, document.getElementById('root'));
}

import '../sass/style.scss';