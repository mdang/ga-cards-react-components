import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card" onClick={ this.handleClick.bind(this) }>
          {
            this.state.visible ?
              <h4 className="card-title">{ this.props.question }</h4> :
              ''
          }
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}

export default Card;
