/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import React from 'react';
// import ReactDOM from 'react-dom';

import Movie from './containers/movieService.js';
import Page from './presentational/page.js';
import { parseJson } from '../common/common.js';


class SearchMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = { search: {} } ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: {string: event.target.value}
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let search = Object.assign({}, this.state.search);
    Movie.get(search.string)
      .then(parseJson)
      .then(Movie.parseResponse)
      .then((results) => {
        search.results = results;
        this.setState({search: search});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Page
        onSubmit={this.handleSubmit}
        onInput={this.handleChange}
        search={this.state.search}/>
    );
  }
}

ReactDOM.render(<SearchMovie/>, document.getElementById('mainContent'));
