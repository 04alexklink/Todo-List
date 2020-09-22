import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = { 
    todos: [
      {
        id:1,
        title: 'Take out the rubbish',
        completed: false
      },
      {
        id:2,
        title: 'Eat 5 pieces of fruit',
        completed: false
      },
      {
        id:3,
        title: 'Go to the gym',
        completed: false
      }
    ]
  }
  markComplete = (id, title) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  deleteButton = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteButton={this.deleteButton}/>
      </div>
    );
  }
}

export default App;
