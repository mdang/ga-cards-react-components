import Config from '../lib/Config';
import axios from 'axios';

class Card {
  static all(cb) {
    axios.get(`${ Config.get('apiUrl') }/cards`)
      .then((response) => {
        console.log('response', response);

        cb(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static save(card, cb) {
    const { question } = card;
    axios.post(`${ Config.get('apiUrl') }/cards`, {
        question: question
      })
      .then((response) => {
        console.log('Saved card', response);

        cb(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Card;
