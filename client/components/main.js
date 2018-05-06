/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';

import Movie from './containers/movieService.js';
import Page from './presentational/page.js';
import ParseJson from '../common/common.js';


class SearchMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: {}} ;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('searching...');
    console.log(this.state.search.string);
    Movie.get(this.state.search.string)
      .then(ParseJson)
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
        search={this.state.search}/>
    );
  }
}

ReactDOM.render(<SearchMovie/>, document.getElementById('mainContent'));
