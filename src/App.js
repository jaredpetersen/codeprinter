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

    this.fonts = [
      'Anonymous Pro',
      'Cousine',
      'Cutive Mono',
      'Fira Mono',
      'IBM Plex Mono',
      'Inconsolata',
      'Nanum Gothic Coding',
      'Nova Mono',
      'Overpass Mono',
      'Oxygen Mono',
      'PT Mono',
      'Roboto Mono',
      'Share Tech Mono',
      'Source Code Pro',
      'Space Mono',
      'Ubuntu Mono'
    ];
    this.sizes = [ 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
    this.themes = [ 'None', 'GitHub', 'VS', 'XCode' ];

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
        <Toolbar fonts={this.fonts} sizes={this.sizes} themes={this.themes} />
        <Container fluid={true} className='responsive-container'>
          <Document />
        </Container>
      </div>
    );
  }
}

export default App;
