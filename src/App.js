import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

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

  handleToggle = (itemId) => {
    this.setState({
      todoData: this.state.todoData.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  handleComplete = () => {
    const newList = this.state.todoData.filter((item) => {
      return !item.completed;
    });

    this.setState({
      todoData: newList
    });
  };

  handleAdd = (itemText) => {
    const task = {
      text: itemText,
      id: this.state.todoData.length,
      completed: false
    };

    const newList = [...this.state.todoData, task];

    this.setState({
      todoData: newList
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList
          todoData={this.state.todoData}
          handleToggle={this.handleToggle}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
