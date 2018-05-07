/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';

var EnterCodeForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <div>
      <label>
      Search:
        <input
          type="text"
          value={props.input}
          name='search'
          onChange={props.onInput}>
        </input>
      </label>
      <input
        type="submit"
        value="Submit">
      </input>
    </div>
  </form>);

export default EnterCodeForm;
