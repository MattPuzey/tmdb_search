/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';

function Item(props) {
  return <li className="list-group-item d-flex justify-content-between align-items-center">
    {props.message}
  </li>;
}

export function ItemList(props) {
  const items = props.items;
  return (
    <ul className="list-group">
      {items.map((text) => <Item key={text} message={text} />)}
    </ul>
  );
}
