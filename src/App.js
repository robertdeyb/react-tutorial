import './App.css';
import React, { Component } from 'react';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
class App extends Component {
  state = {
    users: [
      {
        username: "Dave",
        address: "San Jose Del Monte, Bulacan"
      },
      {
        username: "Robert",
        address: "Pleasant Hills"
      },
      {
        username: "Torrente",
        address: "Lauan Street"
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
  usernameChangeHandler = (index, event) => {
    let userArray = this.state.users.slice(); //creates the clone of the state


    userArray[index].username = event.target.value;
    this.setState({users: userArray});
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
        <UserOutput 
        name={this.state.users[0].username}
        address={this.state.users[0].address}
        />
        <UserInput 
        changed={this.usernameChangeHandler.bind(this, 0)}
        index="0"/>
        <UserOutput 
        name={this.state.users[1].username}
        address={this.state.users[1].address}/>
        <UserInput 
          changed={this.usernameChangeHandler.bind(this, 1)}
          index="1"
        />

        <UserOutput 
        name={this.state.users[2].username}
        address={this.state.users[2].address}
        />
        <UserInput 
        changed={this.usernameChangeHandler.bind(this, 2)}
        index="2"
        />
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sample Text'));
  }
}

export default App;
