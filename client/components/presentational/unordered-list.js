/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import React from 'react';

function Item(props) {
  return <li>{props.message}</li>;
}

export function ItemList(props) {
  const items = props.items;
  return (
    <ul>
      {items.map((text) => <Item key={text} message={text} />)}
    </ul>
  );
}
