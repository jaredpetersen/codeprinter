import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Document from './components/Document';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: 10 }} />
        <Container>
          <Document />
        </Container>
      </div>
    );
  }
}

export default App;
