/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import React from 'react';
import Form from './form.js';
import {ItemList} from './unordered-list.js';

export class Page extends React.Component {
  render(){
    const results = this.props.search.results;
    const items = results ? <ItemList items={results}/> : null
    return(
      <div>
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

export default Page;
