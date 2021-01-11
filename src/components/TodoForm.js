import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
        ></input>
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
