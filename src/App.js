import React, { Component } from 'react';
import Navbar from './components/Navbar';
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
        <Container fluid={true} style={{ height: 'calc(100% - 76px)'}}>
          <Document />
        </Container>
      </div>
    );
  }
}

export default App;
