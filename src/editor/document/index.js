import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle, arduinoLight, ascetic, docco, githubGist, grayscale, idea, tomorrow, vs, xcode } from 'react-syntax-highlighter/styles/hljs';
import './index.css';

const themeMap = {
  'Arduino': arduinoLight,
  'Ascetic': ascetic,
  'Docco': docco,
  'GitHub': githubGist,
  'Grayscale': grayscale,
  'hljs': defaultStyle,
  'Idea': idea,
  'Tomorrow': tomorrow,
  'VS': vs,
  'Xcode': xcode
};

const themes = Object.keys(themeMap);

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '// Welcome to codeprinter!\n' +
            'const foo = () => {\n' +
            '  console.log(\'This is where your code will be printed out!\');\n' +
            '};'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ code: event.target.value });
  };

  render() {
    let placeholder = 'Paste your code in here!';

    if (this.props.numbers) {
      placeholder += ' \nIf you have some lines that are longer than the page width, the line numbers won\'t be fully accurate. To correct for this, add a few extra new lines to the bottom of your code.';
    }

    return (
      <div className='h-100 d-flex flex-column'>
        <Row className='no-print flex-grow-1'>
          <Col className='flex-grow-1'>
            <Input type='textarea' id='typeSpace' placeholder={placeholder} onChange={this.onChange} style={{ height: '100%', resize: 'none' }} />
          </Col>
        </Row>

        <div id='printSpace' className='only-print' style={{ fontSize: '62.5%'}}>
          <SyntaxHighlighter
            showLineNumbers={this.props.numbers}
            style={themeMap[this.props.theme] || ''}
            codeTagProps={{ style: { fontFamily: `"${this.props.font}", monospace`, fontSize: `${this.props.size}pt` } }}
            lineNumberStyle={{ fontFamily: `"${this.props.font}", monospace`, fontSize: `${this.props.size}pt` }}
            customStyle={{ border: 'none' }}
            >
              {this.state.code}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  font: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  theme: PropTypes.oneOf([ 'None', ...Object.keys(themeMap) ]).isRequired,
  numbers: PropTypes.bool.isRequired
};

export default Document;
export { Document, themes };
