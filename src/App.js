import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${props => props.alt === "true" ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: '10px';
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt === "true" ? 'salmon' : 'lighgreen'};
    color: black;
  }

`;

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
      
    }
    const colors = [];

    if (this.state.persons.length <= 2) {
      colors.push("red");
    }

    if (this.state.persons.length <= 1) {
      colors.push("bold");
    }
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={colors.join(" ")}>This is really Working!</p>
          <StyledButton 
            alt={this.state.showPerson.toString()}
            onClick={this.togglePersons}
          >Toggle Persons</StyledButton>
          {persons}
        </div>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
  }
}

export default App;
