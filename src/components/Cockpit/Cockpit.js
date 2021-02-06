import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    const colors = [];
    let btnClass = "";
    
    
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      colors.push(classes.red);
    }

    if (props.persons.length <= 1) {
      colors.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={colors.join(" ")}>This is really Working!</p>
            <button className={btnClass}
                onClick={props.togglePersons}
            >Toggle Persons</button>
        </div>
       
    );
};
export default cockpit;