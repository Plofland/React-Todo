import React from 'react';
import TodoList from './components/TodoList';

const todoData = [
  {
    id: 0,
    text: 'Something',
    completed: false
  },
  {
    id: 1,
    text: 'Something else',
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoData: todoData
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
