import React from 'react';
import { shallow } from 'enzyme';
import { Document, themes } from './index.js';
import { Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';

describe('Editor Document', () => {
  it('renders without crashing', () => {
    shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />);
  });

  it('renders the print section with some default code when text is not provided', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />);
    const expectedDefaultCode =
      '// Welcome to codeprinter!\n' +
      'const foo = () => {\n' +
      "  console.log('This is where your code will be printed out!');\n" +
      '};';
    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.children().text()).toEqual(expectedDefaultCode);
  });

  it('adds text to the print section when typing in the text area', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />);
    const expectedCode = 'some code';

    document.find(Input).simulate('change', { target: { value: expectedCode } });

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.children().text()).toEqual(expectedCode);
  });

  it('renders the placeholder with a simple note when line numbers are not enabled', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={false} />);
    const expectedPlaceholder = 'Paste your code in here!';

    const textarea = document.find(Input);

    expect(textarea.prop('placeholder')).toEqual(expectedPlaceholder);
  });

  it('renders the placeholder with an extra note when line numbers are enabled', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />);
    const expectedPlaceholder =
      "Paste your code in here! \nIf you have some lines that are longer than the page width, the line numbers won't be fully accurate. To correct for this, add a few extra new lines to the bottom of your code.";

    const textarea = document.find(Input);

    expect(textarea.prop('placeholder')).toEqual(expectedPlaceholder);
  });

  it('renders the code with the specified font', () => {
    const expectedFont = 'Space Mono';
    const document = shallow(<Document font={expectedFont} size={12} theme={'GitHub'} numbers={true} />);

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.prop('codeTagProps').style.fontFamily).toEqual(`"${expectedFont}", monospace`);
  });

  it('renders the code with the specified font size', () => {
    const expectedSize = 14;
    const document = shallow(<Document font={'Anonymous Pro'} size={expectedSize} theme={'GitHub'} numbers={true} />);

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.prop('codeTagProps').style.fontSize).toEqual(`${expectedSize}pt`);
  });

  it('renders the code with the specified theme', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={false} />);

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.prop('style')).not.toEqual('');
  });

  it('renders the code with no theme if the theme passed is None', () => {
    const document = shallow(<Document font={'Anonymous Pro'} size={12} theme={'None'} numbers={false} />);

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.prop('style')).toEqual('');
  });

  it('renders the code with the specified line numbers', () => {
    const expectedLineNumbersEnabled = true;
    const document = shallow(
      <Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={expectedLineNumbersEnabled} />
    );

    const syntaxHighlighter = document.find(SyntaxHighlighter);

    expect(syntaxHighlighter.prop('showLineNumbers')).toEqual(expectedLineNumbersEnabled);
  });
});

describe('Editor Document Theme Map', () => {
  it('returns a map of the available themes', () => {
    const expectedThemes = [
      'Arduino',
      'Ascetic',
      'Docco',
      'GitHub',
      'Grayscale',
      'hljs',
      'Idea',
      'Tomorrow',
      'VS',
      'Xcode'
    ];

    expect(themes).toEqual(expectedThemes);
  });
});
