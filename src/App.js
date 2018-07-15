import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './navbar';
import Editor from './editor';
import Heart from './heart';
import NotFound from './not-found';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <Router>
        <div className='h-100'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Editor} />
            <Route exact path="/heart" component={Heart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
