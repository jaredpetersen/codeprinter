import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Toolbar from './toolbar';
import { Document, themes } from './document';

class Editor extends Component {
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

    this.sizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    this.themes = ['None', ...themes];

    this.state = {
      style: {
        font: this.fonts[11],
        size: this.sizes[2],
        theme: this.themes[0],
        lineNumbers: 'none'
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onPrint() {
    window.print();
  }

  onChange(toolbar) {
    const style = {
      font: toolbar.activeFont,
      size: toolbar.activeSize,
      theme: toolbar.activeTheme,
      lineNumbers: toolbar.lineNumbers
    };
    this.setState({ style });
  }

  render() {
    return (
      <div className="responsive-container">
        <Toolbar
          fonts={this.fonts}
          activeFont={this.state.style.font}
          sizes={this.sizes}
          activeSize={this.state.style.size}
          themes={this.themes}
          activeTheme={this.state.style.theme}
          lineNumbers={this.state.style.lineNumbers}
          onChange={this.onChange}
          onPrint={this.onPrint}
        />
        <Container fluid={true} className="h-100">
          <Document
            font={this.state.style.font}
            size={this.state.style.size}
            theme={this.state.style.theme}
            lineNumbers={this.state.style.lineNumbers}
          />
        </Container>
      </div>
    );
  }
}

Editor.propTypes = {};

export default Editor;
