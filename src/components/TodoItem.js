import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
      <p>{this.props.todoItem.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'

}
export default TodoItem;