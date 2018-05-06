/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import React from 'react';
import Form from './form.js';

// convert to functional Component
export class Page extends React.Component {
  render(){
    return(
      <div>
        <div>
          <div className="page-section">
            <Form
              onSubmit={this.props.onSubmit}
              onInput={this.props.onInput}
              input={this.props.search.string}/>
          </div>
          <p>{this.props.search.results}</p>
        </div>
      </div>
    );
  }
}

export default Page;
