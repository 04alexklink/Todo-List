import React from 'react';

class TodoItem extends React.Component {
  render() {
    console.log(this.props.todo.title)
    return (
      <p>{this.props.todo.title}</p>
    );
  }
}

export default TodoItem;