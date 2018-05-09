/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './button.js';
import InputField from './input.js';

const EnterCodeForm = (props) => (

  <form onSubmit={props.onSubmit}>
    <div>
      <label>
      Search:
        <br/>
        <input
          type="text"
          value={props.input}
          name='search'
          onChange={props.onInput}>
        </input>
      </label>
      <SubmitButton/>
    </div>
  </form>);

EnterCodeForm.propTypes = {
  input: PropTypes.string,
  onSubmit: PropTypes.function,
  onInput: PropTypes.function,
};

export default EnterCodeForm;
