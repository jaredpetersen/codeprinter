import React from 'react';
import {
  Row,
  Col,
  Input,
  Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './index.css';

const Document = (props) => {
  const code = 'console.log(\'This is where your code will be printed out!\');';

  return (
    <div className='h-100 d-flex flex-column'>
      <Row className='no-print'>
        <Col xs='3' className='pr-2'>
          <Input type='select' name='fontFaceSelect' id='fontFaceSelect'>
            <option>Courier</option>
            <option>Roboto</option>
          </Input>
        </Col>
        <Col xs='auto' className='pl-2 pr-2'>
          <Input type='select' name='fontSizeSelect' id='fontSizeSelect'>
            <option>8px</option>
            <option>9px</option>
            <option>10px</option>
            <option>11px</option>
            <option>12px</option>
          </Input>
        </Col>
        <Col xs='2' className='pl-2 pr-2'>
          <Input type='select' name='syntaxHighlightSelect' id='syntaxHighlightSelect'>
            <option>None</option>
            <option>GitHub</option>
            <option>VS</option>
            <option>XCode</option>
          </Input>
        </Col>
        <Col xs='auto' className='pl-2 pr-2'>
          <Button outline color='secondary'>#</Button>
        </Col>
        <Col xs='auto' className='pl-2'>
          <Button outline color='primary'>Print</Button>
        </Col>
      </Row>

      <div style={{ marginTop: 10 }} />

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
