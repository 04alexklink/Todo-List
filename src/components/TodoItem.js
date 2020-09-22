import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px#ccc dotted'
    }
  }
 

  render() {
    return (
      <div style={this.getStyle()}>
      <p>
        < input type = "checkbox" onChange={this.props.markComplete} /> {' '}
        {this.props.todoItem.title}
      </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem;