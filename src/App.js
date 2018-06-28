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
      ],
      newTodoDescription: ""
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const descr = this.state.newTodoDescription;
    if (!descr) { return }

    const newTodo = {
      description: descr,
      isCompleted: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodoDescription: ""
    });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos: todos });
  }

  deleteTodo(index) {
    const todos = this.state.todos.filter( (todo, i) => (i !== index) );
    this.setState({ todos: todos });
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
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={ () => this.deleteTodo(index) }
            />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text"
            value={ this.state.newTodoDescription }
            onChange={ (e) => this.handleChange(e) }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
