import './App.css';
import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Dave",
        age: 25
      },
      {
        id: "2",
        name: "Robert",
        age: 28
      },
      {
        id: "3",
        name: "Torrente",
        age: 26
      },
    ],
    showPerson: false
  };
  nameChangeHandler = (event, index) => {
    let inputVal = event.target.value;
    let personIndex = this.state.persons.findIndex((person) => {
      return person.id === index;
    })
    const persons = [...this.state.persons];
    persons[personIndex].name = inputVal;

    this.setState({persons:persons})
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //spread the elements on the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  togglePersons = () => {
    let valueShowPerson = this.state.showPerson;
    this.setState({showPerson: !valueShowPerson});
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: "white",
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, key) => {
              return <Person name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(key)}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
            })
          }
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: 'salmon',
        color: 'white'
      }
    }
    const colors = [];

    if (this.state.persons.length <= 2) {
      colors.push("red");
    }

    if (this.state.persons.length <= 1) {
      colors.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={colors.join(" ")}>This is really Working!</p>
          <button 
            onClick={this.togglePersons}
            style = {style}
          >Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
  }
}

export default Radium(App);
