/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import React from 'react';

export class Form extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label>
          Search:
            <input
              type="text"
              value={this.props.input}
              name='search'
              onChange={this.props.onInput}>
            </input>
          </label>
          <input
            type="submit"
            value="Submit">
          </input>
        </div>
      </form>);
  }
}

export default Form;
