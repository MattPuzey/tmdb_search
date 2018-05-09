/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import Form from './form.js';
import {ItemList} from './unordered-list.js';
import PropTypes from 'prop-types';

export class Page extends React.Component {
  render(){
    const results = this.props.search.results;
    const items = results ? <ItemList items={results}/> : null;
    return(
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-3">Search for movies</h1>
          <p className="lead">This is a simple lookup for movie titles.</p>
          <hr className="my-4"/>
          <p className="lead">
          </p>
        </div>
        <div>
          <div>
            <Form
              onSubmit={this.props.onSubmit}
              onInput={this.props.onInput}
              input={this.props.search.string}/>
          </div>
          <div>
            {this.props.fetching ?
              <h2>Fetching results...</h2>: null}
            {items}
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  search: PropTypes.shape({
    results: PropTypes.list,
    string: PropTypes.string
  }),
  onSubmit: PropTypes.function,
  onInput: PropTypes.function,
  fetching: PropTypes.bool
};

export default Page;
