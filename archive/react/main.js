let React = require('react');
let ReactDOM = require('react-dom');

let GACardsApp = React.createClass({
  getInitialState: function() {
    return {
      component: CardsSection
    }
  },

  changeSection: function(componentName) {
    this.setState({
      component: componentName
    });
  },

  render: function() {
    return (
      <div>
        <Header title="Cards Against Assembly" onChangeCallback={ this.changeSection }/>
        <Section component={ this.state.component }/>
        <Footer madeWith="♥︎"/>
      </div>
    )
  }
});

let Section = React.createClass({
  render: function() {
    return (
      <this.props.component/>
    )
  }
});

let Card = React.createClass({
  getInitialState: function() {
    return {
      visibility: 'hidden'
    }
  },

  cardClicked: function() {
    (this.state.visibility === 'hidden') ? 
      this.setState({ visibility: '' }) : 
      this.setState({ visibility: 'hidden' });
  },

  render: function() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card" onClick={ this.cardClicked }>
          <h4 id={ this.props.id } className={ 'card-title ' + this.state.visibility }>{ this.props.question }</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
});

let CardsSection = React.createClass({
  getInitialState: function() {
    return {
      cards: []
    }
  },

  componentDidMount: function() {
    $.ajax({
      url: '/cards',
      method: 'GET'
    }).done(function(response) {
      this.setState({
        cards: response
      });
    }.bind(this)).fail(function() {
      console.log('Uh oh..');
    }.bind(this));
  },

  render: function() {
    var cards = this.state.cards.map(card => 
      <Card key={ card._id } id={ card._id } question={ card.question } />
    );

    return (
      <section id="cards" className="container-fluid">
        <div className="row">
          { cards }
        </div>
      </section>
    )
  }
});

let NewSection = React.createClass({
  getInitialState: function() {
    return {
      newQuestion: ''
    }
  },

  newQuestionChanged: function() {
    this.setState({
      newQuestion: this.refs.newQuestionText.value
    });
  },

  submit: function(e) {
    e.preventDefault();

    $.ajax({
      url: '/cards',
      method: 'POST',
      data: {
        question: this.state.newQuestion
      }
    }).done(function(response) {
      this.setState({
        newQuestion: ''
      });
    }.bind(this)).fail(function() {
      console.log('Uh oh..');
    }.bind(this));
  },

  render: function() {
    return (
      <section className="container-fluid">
        <div className="row">
          <form name="add-card" id="add-card" onSubmit={ this.submit }>
            <input ref="newQuestionText" value={ this.state.newQuestion } onChange={ this.newQuestionChanged } type="text" name="question" id="question" placeholder="What's your question?"/>
          </form>
          <br/>
          <div className="card">
            <h4 className="card-title">{ this.state.newQuestion }</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    )
  }
});

let AboutSection = React.createClass({
  render: function() {
    return (
      <div>
        <p>To start the game, each player draws ten White Cards.</p>
        <p>The person who most recently pooped begins as the Card Czar and plays a Black Card. The Card Czar reads the question or fill-in-the-blank phrase on the Black Card out loud.</p>
        <p>Everyone else answers the question or fills in the blank by passing one White Card, face down, to the Card Czar.</p>
        <p>The Card Czar shuffles all of the answers and shares each card combination with the group. For full effect, the Card Czar should usually re-read the Black Card before presenting each answer. The Card Czar then picks the funniest play, and whoever submitted it gets one Awesome Point.</p>
        <p>After the round, a new player becomes the Card Czar, and everyone draws back up to ten White Cards.</p>
      </div>
    )
  }
});

let Header = React.createClass({
  getInitialState: function() {
    return {
      activeTab: 'home'
    }
  },

  tabClicked: function(tab) {
    if (this.state.activeTab === tab) {
      return;
    }

    switch (tab) {
      case 'new':
        this.props.onChangeCallback(NewSection);

        break;
      case 'about':
        this.props.onChangeCallback(AboutSection);

        break;
      default:
        this.props.onChangeCallback(CardsSection);
    }

    this.setState({
      activeTab: tab
    });
  },

  render: function() {
    return (
      <div>
        <header className="navbar">
          <h1 className="pull-left">{ this.props.title }</h1>
        </header>

        <nav className="tabs">
          <a className={ (this.state.activeTab === 'home') ? 'active' : '' } onClick={ this.tabClicked.bind(this, 'home') }>Home</a>
          <a className={ (this.state.activeTab === 'new') ? 'active' : '' } onClick={ this.tabClicked.bind(this, 'new') }>Add a New Card</a>
          <a className={ (this.state.activeTab === 'about') ? 'active' : '' } onClick={ this.tabClicked.bind(this, 'about') }>About</a>
        </nav>
      </div>
    )
  }
});

let Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <p>Made with <span className="heart">{ this.props.madeWith }</span> at General Assembly</p>
      </footer>
    )
  }
});

ReactDOM.render(<GACardsApp/>, document.getElementsByClassName('container')[0]);