import React, { Component } from 'react';
import Nav from './nav.jsx';
import Header from './header.jsx';
import About from './about.jsx';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <About/>
      </div>
    );
  }
}

export default App;
