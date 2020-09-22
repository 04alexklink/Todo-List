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
        completed: true
      },
      {
        id:3,
        title: 'Go to the gym',
        completed: false
      }
    ]
  }
  markComplete = (id, title) => {
    console.log(id)
    console.log(title)
  }
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
