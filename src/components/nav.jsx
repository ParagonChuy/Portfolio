import React, {Component} from 'react';
import '../stylesheets/nav.css'

class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <h1 className="nav-name">Jesus Vega</h1>
        <br/>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#social">Social</a>
        </div>
      </div>
    );
  }
}

export default Nav;
