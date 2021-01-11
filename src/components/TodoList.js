// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  const { todoData, handleComplete, handleToggle } = props;

  const handleClick = () => {
    props.handleComplete();
  };

  return (
    <div>
      <button onClick={handleClick}>Clear Completed</button>
      {props.todoData.map((item) => {
        return <Todo key={item.id} item={item} handleToggle={handleToggle} />;
      })}
      <p>Hello</p>
    </div>
  );
}
