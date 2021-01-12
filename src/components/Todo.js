import React from 'react';
// import styled from 'styled-components';

// const StyledItem = styled.div`
//   p:hover {
//     cursor: pointer;
//   }

//   .item.completed {
//     color: slategray;
//     text-decoration: line-through;
//   }
// `;

export default function Todo(props) {
  // const { item, handleToggle } = props;

  const handleClick = () => {
    props.handleToggle(props.item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`item${props.item.completed ? ' completed' : ''}`}
    >
      <p>{props.item.text}</p>
    </div>
  );
}
