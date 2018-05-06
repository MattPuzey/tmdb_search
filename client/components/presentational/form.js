/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';

export class Form extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.onSubmit(this.props.value)}>
        <div>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.onInput}>
          </input>
          <input
            className="button"
            type="submit"
            value="Submit"
            role="button">
          </input>
        </div>
      </form>);
  }
}

export default Form;
