import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // This keeps us from having to do `.bind(this)` everytime we use this handler
    this.onNavClick = this.onNavClick.bind(this);

    this.state = {
      activeClassName: 'active'
    }
  }

  onNavClick(event) {
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i=0; i<navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }

    event.target.classList.add('active');
  }

  render() {
    return (
      <div className="container">
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>

        <nav className="tabs">
          <a onClick={ this.onNavClick } className="nav-link active" href="#/">Home</a>
          <a onClick={ this.onNavClick } className="nav-link" href="#/new">Add a New Card</a>
          <a onClick={ this.onNavClick } className="nav-link" href="#/about">About</a>
        </nav>

        { this.props.children }

        <footer>
          <p>Made with <span className="heart">♥︎</span> at General Assembly</p>
        </footer>
      </div>
    );
  }
}

export default App;
