import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import { Document, themeMap } from './components/Document';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

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

    this.sizes = [ '8pt', '9pt', '10pt', '11pt', '12pt', '13pt', '14pt', '15pt', '16pt', '17pt', '18pt' ];

    this.themes = [ 'None', ...Object.keys(themeMap) ];

    this.state = {
      style: {
        font: this.fonts[11],
        size: this.sizes[2],
        theme: this.themes[0],
        numbers: false
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onPrint() {
    window.print();
  }

  onChange(type, value) {
    this.setState({ style: { ...this.state.style, [type]: value }});
  }

  render() {
    return (
      <div className='h-100'>
        <Navbar />
        <Toolbar
          fonts={this.fonts} activeFont={this.state.style.font}
          sizes={this.sizes} activeSize={this.state.style.size}
          themes={this.themes} activeTheme={this.state.style.theme}
          activeNumbers={this.state.style.numbers}
          onChange={this.onChange}
          onPrint={this.onPrint} />
        <Container fluid={true} className='responsive-container'>
          <Document
            font={this.state.style.font}
            size={this.state.style.size}
            theme={this.state.style.theme}
            numbers={this.state.style.numbers} />
        </Container>
      </div>
    );
  }
}

export default App;
