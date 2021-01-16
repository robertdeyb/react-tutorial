import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person';

const App = (props) => {
    const [personState, setPersonState] = useState({
      persons: [
        {
          name: "Dave Pogi",
          age: 25
        },
        {
          name: "Robert",
          age: 28
        },
        {
          name: "Torrente",
          age: 29
        },
      ]
    });
    const [otherUseState, setOtherUseState] = useState("test other use state");
    console.log(personState, otherUseState);

    const switchNameHandler = () => {
      setPersonState({
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
            age: 29
          },
        ]
      })
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Change props</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
}

export default App;
