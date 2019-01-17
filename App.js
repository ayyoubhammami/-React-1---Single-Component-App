import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './image1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={image1} className="App-logo"  alt="logo" />
          <p className="pg1">
            React makes it painless to create interactive UIs. Design simple views for each state in your application,
             and React will efficiently update and render just the right components when your data changes.
              Declarative views make your code more predictable and easier to debug.
          </p>
          <br></br> <hr ></hr>
            <p className="pg2">
            React makes it painless to create interactive UIs. Design simple views for each state in your application,
             and React will efficiently update and render just the right components when your data changes.
              Declarative views make your code more predictable and easier to debug.
          </p>

          
        </header>
      </div>

    );
  }
}

export default App;
