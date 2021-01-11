// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  const { todoData } = props;

  return (
    <div>
      {props.todoData.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
      <p>Hello</p>
    </div>
  );
}
