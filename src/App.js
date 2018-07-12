import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Document from './components/Document';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        font: 'courier',
        size: 10
      }
    }

    this.onChange = this.onChange.bind(this);
  }

  onPrint() {
    window.print();
  }

  onChange(style) {
    this.setState({ style });
  }

  render() {
    return (
      <div className='h-100'>
        <Navbar
          font={this.state.style.font}
          size={this.state.style.size}
          onPrint={this.onPrint}
          onChange={this.onSizeChange} />
        <Toolbar />
        <Container fluid={true} className='responsive-container'>
          <Document />
        </Container>
      </div>
    );
  }
}

export default App;
