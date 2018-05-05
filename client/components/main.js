/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';

import ResendCode from './containers/movieService.js';
import Page from './presentational/page.js';


class SearchMovie extends React.Component {

  constructor(props) {
    super(props);

    this.state = {} ;
  }

  render() {
    return (<Page/>)
  }
}

ReactDOM.render(<SearchMovie/>, document.getElementById('mainContent'));
