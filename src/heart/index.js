import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Heart = () => {
  return (
    <Container fluid={true} className='responsive-container' style={{ marginTop: 10 }}>
      <Row>
        <Col>
          <h2><i className="fas fa-heart text-danger" title='Heart'></i> codeprinter?</h2>
          <hr />
          <p>That's awesome! Let the developer know on <a href='https://twitter.com/jaredtpetersen' target='_blank' rel='noopener noreferrer'>Twitter</a>, <a href="https://paypal.me/jaredtpetersen" target="_blank" rel='noopener noreferrer'>buy him a cup of coffee</a>, or star the repository on <a href='https://github.com/jaredpetersen/codeprinter' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
          <p>Found a bug? Want to request a new feature? Great! Just create an issue and/or check out the repository on GitHub. We're welcome to accept pull requests.</p>

          <h2><i className="fas fa-info-circle text-primary" title='Info'></i> About the Developer</h2>
          <hr />
          <p>This software was developed by Jared Petersen.</p>
          <p>You can check out his other repositories on <a href='https://github.com/jaredpetersen' target='_blank' rel='noopener noreferrer'>GitHub</a> or look at his résumé on <a href='https://www.linkedin.com/in/petersenjared' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </Col>
      </Row>
    </Container>
  );
};

Heart.propTypes = { };

export default Heart;
