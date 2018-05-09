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
        <div>
          <div>
            <Form
              onSubmit={this.props.onSubmit}
              onInput={this.props.onInput}
              input={this.props.search.string}/>
          </div>
          <div>
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
  onInput: PropTypes.function
};

export default Page;
