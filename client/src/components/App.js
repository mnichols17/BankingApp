import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
