import React from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './index.css';

const Document = (props) => {
  const code = 'console.log(\'This is where your code will be printed out!\');';

  return (
    <div className='h-100 d-flex flex-column'>
      <Row className='no-print flex-grow-1'>
        <Col className='flex-grow-1'>
          <Input type='textarea' id='typeSpace' placeholder='Paste your code in here!' style={{ height: '100%', resize: 'none' }} />
        </Col>
      </Row>

      <div id='printSpace' className='only-print'>
        <SyntaxHighlighter language='javascript' showLineNumbers={true} style={docco} customStyle={{ border: 'none' }}>{code}</SyntaxHighlighter>
      </div>
    </div>
  )
};

export default Document;
