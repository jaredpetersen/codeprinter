import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  defaultStyle,
  arduinoLight,
  ascetic,
  docco,
  githubGist,
  grayscale,
  idea,
  tomorrow,
  vs,
  xcode
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css';

const themeMap = {
  Arduino: arduinoLight,
  Ascetic: ascetic,
  Docco: docco,
  GitHub: githubGist,
  Grayscale: grayscale,
  hljs: defaultStyle,
  Idea: idea,
  Tomorrow: tomorrow,
  VS: vs,
  Xcode: xcode
};

const themes = Object.keys(themeMap);

class Document extends Component {
  constructor(props) {
    super(props);

    this.defaultCode =
      '// Welcome to codeprinter!\n' +
      'const foo = () => {\n' +
      "  console.log('This is where your code will be printed out!');\n" +
      '};';

    this.state = {
      code: this.defaultCode
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const code = event.target.value === '' ? this.defaultCode : event.target.value;
    this.setState({ code });
  }

  render() {
    let placeholder = 'Paste your code in here!';

    const lineNumberStyle = lineNumbers => {
      switch (lineNumbers) {
        case 'standard':
          return { className: 'code-line' };
        case 'vertical':
          return { className: 'code-line-vertical' };
        default:
          return null;
      }
    };

    return (
      <div className="h-100 d-flex flex-column">
        <Row className="no-print flex-grow-1">
          <Col className="flex-grow-1">
            <Input
              type="textarea"
              id="typeSpace"
              placeholder={placeholder}
              onChange={this.onChange}
              style={{ height: '100%', resize: 'none' }}
            />
          </Col>
        </Row>

        <div id="printSpace" className="only-print" style={{ fontSize: '62.5%' }}>
          <SyntaxHighlighter
            lineProps={lineNumberStyle(this.props.lineNumbers)}
            wrapLines={true}
            style={themeMap[this.props.theme] || ''}
            codeTagProps={{
              style: { fontFamily: `"${this.props.font}", monospace`, fontSize: `${this.props.size}pt` }
            }}
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
  theme: PropTypes.oneOf(['None', ...Object.keys(themeMap)]).isRequired,
  lineNumbers: PropTypes.oneOf(['none', 'standard', 'vertical']).isRequired
};

export default Document;
export { Document, themes };
