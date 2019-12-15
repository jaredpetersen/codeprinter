import React from 'react';
import PropTypes from 'prop-types';
import { Col, Navbar, Button } from 'reactstrap';
import FontDropdown from './font-dropdown';
import SizeDropdown from './size-dropdown';
import ThemeDropdown from './theme-dropdown';

const Toolbar = ({ fonts, activeFont, sizes, activeSize, themes, activeTheme, lineNumbers, onChange, onPrint }) => {
  return (
    <Navbar color="#FFFFFF" light expand="sm" style={{ marginBottom: 5 }}>
      <div className="form-row" style={{ width: '100%' }}>
        <Col xs="9" md="4" className="my-2 my-md-0">
          <FontDropdown
            fonts={fonts}
            active={activeFont}
            onSelect={activeFont => onChange({ activeFont, activeSize, activeTheme, lineNumbers })}
          />
        </Col>
        <Col xs="3" md="2" className="my-2 my-md-0">
          <SizeDropdown
            sizes={sizes}
            active={activeSize}
            onSelect={activeSize => onChange({ activeFont, activeSize, activeTheme, lineNumbers })}
          />
        </Col>
        <Col xs="12" md="3" className="my-2 my-md-0">
          <ThemeDropdown
            themes={themes}
            active={activeTheme}
            onSelect={activeTheme => onChange({ activeFont, activeSize, activeTheme, lineNumbers })}
          />
        </Col>
        <Col xs="4" md="auto" className="my-2 my-md-0">
          <Button
            id="line-numbers-none"
            active={lineNumbers === 'none'}
            outline
            color="secondary"
            style={{ width: '100%' }}
            onClick={() => onChange({ activeFont, activeSize, activeTheme, lineNumbers: 'none' })}
          >
            -
          </Button>
        </Col>
        <Col xs="4" md="auto" className="my-2 my-md-0">
          <Button
            id="line-numbers-standard"
            active={lineNumbers === 'standard'}
            outline
            color="secondary"
            style={{ width: '100%' }}
            onClick={() => onChange({ activeFont, activeSize, activeTheme, lineNumbers: 'standard' })}
          >
            #
          </Button>
        </Col>
        <Col xs="4" md="auto" className="my-2 my-md-0">
          <Button
            id="line-numbers-vertical"
            active={lineNumbers === 'vertical'}
            outline
            color="secondary"
            style={{ width: '100%' }}
            onClick={() => onChange({ activeFont, activeSize, activeTheme, lineNumbers: 'vertical' })}
          >
            #|
          </Button>
        </Col>
        <Col xs="12" md="auto" className="my-2 my-md-0">
          <Button id="print" outline color="success" onClick={onPrint} style={{ width: '100%' }}>
            Print
          </Button>
        </Col>
      </div>
    </Navbar>
  );
};

Toolbar.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFont: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeSize: PropTypes.number.isRequired,
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTheme: PropTypes.string.isRequired,
  lineNumbers: PropTypes.oneOf(['none', 'standard', 'vertical']).isRequired,
  onChange: PropTypes.func,
  onPrint: PropTypes.func
};

export default Toolbar;
