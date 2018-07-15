import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Editor from './containers/Editor';
import Heart from './components/Heart';

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
          <Route exact path="/" component={Editor} />
          <Route exact path="/heart" component={Heart} />
        </div>
      </Router>
    );
  }
}

export default App;
