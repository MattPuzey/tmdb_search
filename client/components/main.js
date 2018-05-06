/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';

import Movie from './containers/movieService.js';
import Page from './presentational/page.js';


class SearchMovie extends React.Component {

  constructor(props) {
    super(props);

    this.state = {} ;
  }

  handleSubmit(searchString){
    Movie.get(searchString)
      .then(Movie.parseResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Page
        onSubmit={this.handleSubmit}
        onInput={this.onInput}
        value={this.state.value}
        results={this.state.results}/>
    );
  }
}

ReactDOM.render(<SearchMovie/>, document.getElementById('mainContent'));
