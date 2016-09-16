import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import Cards from './components/Cards';
import About from './components/About';
import NewCard from './components/NewCard';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Cards}/>
      <Route path="about" component={About}/>
      <Route path="new" component={NewCard}/>

      <Route path="*" component={Cards}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
