import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import CardModel from '../models/Card';

class NewCard extends Component {
  constructor(props) {
    super(props);

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const card = {
      question: this.state.title
    }

    CardModel.save(card, (data) => {
      console.log('Card saved!');

      // Go back to the home state
      hashHistory.push('#/');
    })
  }

  onKeyPress(e) {
    this.setState({
      title: e.target.value
    })
  }

  render () {
    return (
      <section className="container-fluid">
        <div className="row">
          <form name="add-card" id="add-card" onSubmit={ this.onSubmit }>
            <input onKeyPress={ this.onKeyPress } type="text" name="question" id="question" placeholder="What's your question?" />
          </form>
          <br />
          <div className="card">
            <h4 className="card-title">{ this.state.title }</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    )
  }
}

export default NewCard;
