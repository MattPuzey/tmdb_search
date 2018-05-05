/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';

var Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}>
      </input>
      <input
        className="button"
        type="submit"
        value="Submit"
        role="button">
      </input>
     </div>
  </form>
);

export default Form;
