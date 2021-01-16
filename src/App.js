import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {
        name: "Dave",
        age: 25
      },
      {
        name: "Robert",
        age: 28
      },
      {
        name: "Torrente",
        age: 26
      },
    ]
  };
  switchNameHandler = (nameEvent) => {
    this.setState({
      persons: [
        {
          name: nameEvent,
          age: 25
        },
        {
          name: "Robert",
          age: 28
        },
        {
          name: "Torrente",
          age: 31
        },
      ]
    })
  };
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Dave",
          age: 25
        },
        {
          name: event.target.value,
          age: 28
        },
        {
          name: "Torrente",
          age: 31
        },
      ]
    })
  };
  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          onClick={() => this.switchNameHandler("Dave Robert Pogi")}
          style = {style}
        >Change props</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        changed={this.nameChangeHandler}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"Test Dave")}
        changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        changed={this.nameChangeHandler}/>
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
  }
}

export default App;
