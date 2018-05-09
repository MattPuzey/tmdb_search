/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => (<input
  type="text"
  placeholder="Search"
  value={props.input}
  name='search'
  onChange={props.onInput}>
</input>);

InputField.propTypes = {
  input: PropTypes.string,
  onInput: PropTypes.function,
};

export default InputField;
