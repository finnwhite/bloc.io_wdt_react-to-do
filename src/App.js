import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: "Take the baby to daycare", isCompleted: true },
        { description: "Pick the baby up from daycare", isCompleted: false },
        { description: "Change the baby's diaper", isCompleted: false },
        { description: "Feed the baby dinner", isCompleted: false },
        { description: "Give the baby a bath", isCompleted: false },
        { description: "Put the baby in pajamas", isCompleted: false },
        { description: "Read the baby a bedtime story", isCompleted: false },
        { description: "Feed the baby a bottle", isCompleted: false },
        { description: "Put the baby to bed", isCompleted: false }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
            />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
