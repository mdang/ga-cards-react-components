import React, { Component } from 'react';
import Card from './Card';
import CardModel from '../models/Card'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }

    CardModel.all((data) => {
      this.setState({
        cards: data
      });
    });
  }

  render() {
    const cards = this.state.cards.map((obj) => {
      return <Card key={obj._id} question={obj.question}/>;
    });

    return (
      <section id="cards" className="container-fluid">
        <div className="row">
            {cards}
        </div>
      </section>
    )
  }
}

export default Cards;
