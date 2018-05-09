/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from './container.js';
import Form from './form.js';
import NavBar from './nav-loader.js';
import {ItemList} from './unordered-list.js';

export class Page extends React.Component {
  render(){
    const results = this.props.search.results;
    const items = results ? <ItemList items={results}/> : null;
    return(
      <PageContainer>
        <div>
          <Form
            onSubmit={this.props.onSubmit}
            onInput={this.props.onInput}
            input={this.props.search.string}/>
        </div>
        <div>
          {this.props.fetching ? <NavBar/>: null}
          {items}
        </div>
      </PageContainer>
    );
  }
}

Page.propTypes = {
  search: PropTypes.shape({
    results: PropTypes.array,
    string: PropTypes.string
  }),
  onSubmit: PropTypes.function,
  onInput: PropTypes.function,
  fetching: PropTypes.bool
};

export default Page;
