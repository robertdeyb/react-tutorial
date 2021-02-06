import classes from './App.css';
import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
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
    let btnClass = '';
   

    let persons = null;
    if (this.state.showPerson) {
      persons = (
          <Persons
            persons={this.state.persons}
            clcked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
      );
      
    }
    return (
        <div className={classes.App}>
          <Cockpit showPerson={this.state.showPerson} persons={this.state.persons} togglePersons={this.togglePersons}></Cockpit>
          {persons}
        </div>
      
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
  }
}

export default App;
