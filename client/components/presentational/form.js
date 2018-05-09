/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './button.js';
import InputField from './input.js';

const EnterCodeForm = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <form onSubmit={props.onSubmit}>
      <div>
        <label>
        Search:
          <br/>
          <input
            className="form-control mr-sm-2"
            type="text"
            value={props.input}
            name='search'
            onChange={props.onInput}>
          </input>
        </label>
        <SubmitButton/>
      </div>
    </form>
</nav>);

EnterCodeForm.propTypes = {
  input: PropTypes.string,
  onSubmit: PropTypes.function,
  onInput: PropTypes.function,
};

export default EnterCodeForm;
