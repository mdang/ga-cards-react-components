import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Made with <span className="heart">{ this.props.madeWith }</span> at General Assembly</p>
      </footer>
    )
  }
}

export default Footer;
