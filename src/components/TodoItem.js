import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    console.log(this.props.todoItem.title)
    return (
      <p>{this.props.todoItem.title}</p>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem;