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
        < input type = "checkbox" onChange={this.props.markComplete.bind(this, this.props.todoItem.id, this.props.todoItem.title)} /> {' '}
        {this.props.todoItem.title}
        <button style={btnStyle}>x</button>
      </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;