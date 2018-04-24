import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import Car from "./Car/Car";

class App extends Component {

  state = {
    persons: [
      {name: "Frank", age: "54"},
      {name: "Monika", age: "52"},
      {name: "Markus", age: "29"},
      {name: "Lisa", age: "26"}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Personen</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <h1>Autos</h1>
        <Car name="Lisa" age="26"/>
      </div>
    );
  }
}

export default App;
