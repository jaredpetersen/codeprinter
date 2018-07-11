import React from 'react';
import {
  Row,
  Col,
  Alert,
  Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './index.css';

const Document = (props) => {
  const code = 'console.log(\'This is where your code will be printed out!\');';

  return (
    <div>
      <Row className='no-print'>
        <Col>
          <Alert color='info'>
            <span style={{ fontWeight: 'bold' }}>Tip! </span>
            You may want to disable printing the header and footer in your web browser
          </Alert>
        </Col>
      </Row>
      <Row className='no-print'>
        <Col>
          <Input type='textarea' id='typeSpace' rows='20' placeholder="Paste your code in here!" />
        </Col>
      </Row>

      <div id='printSpace' className='only-print'>
        <SyntaxHighlighter language='javascript' showLineNumbers={true} style={docco} customStyle={{ border: 'none' }}>{code}</SyntaxHighlighter>
        </div>
    </div>
  )
};

export default Document;
