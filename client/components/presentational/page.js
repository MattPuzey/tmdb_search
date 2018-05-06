/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';
import Form from './form.js';

export class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <div className="page-section">
            <Form
              onSubmit={this.props.onSubmit}
              onInput={this.props.onInput}
              value={this.props.value}/>
          </div>
          <p>{this.props.results}</p>
        </div>
      </div>
    );
  }
}

export default Page;
