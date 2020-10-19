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
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo = !todo.completed
      }
      return todo;
    })});
  }

  deleteTodo = (id) => {
    // this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});
    console.log(id)
  }
    

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
