import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    // This allows us to not have to do `.bind(this)` on the component itself
    this.onClick = this.onClick.bind(this);

    this.state = {
      visibility: 'hidden'
    }
  }

  onClick() {
    this.setState({
      visibility: (this.state.visibility === 'hidden') ? '' : 'hidden'
    })
  }

  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card" onClick={ this.onClick }>
          <h4 className={ `card-title ${ this.state.visibility }` }>{ this.props.question }</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}

export default Card;
