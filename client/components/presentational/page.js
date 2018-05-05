/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';
import Form from './form.js';

export class Page extends React.Component {
  render(){
    return(
      <div>
        <div>
          <div className="page-section">
            <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
