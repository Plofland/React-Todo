import React from 'react';

export default function Todo(props) {
  const { item } = props;

  return (
    <div>
      <p>{props.item.text}</p>
    </div>
  );
}
