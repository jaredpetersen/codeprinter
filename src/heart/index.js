import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Heart = (props) => {
  return (
    <Container fluid={true} className='responsive-container' style={{ marginTop: 10 }}>
      <Row>
        <Col>
          <h2><i className="fas fa-heart text-danger" title='Heart'></i> codeprinter?</h2>
          <hr />
          <p>That's awesome! Let the developer know on Twitter (<a href='https://twitter.com/jaredtpetersen' target='_blank' rel='noopener noreferrer'>@jaredtpetersen</a>), shoot him an <a href='mailto:jaredtoddpetersen@gmail.com'>email</a>, <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=JGJAC7UKRAB9J&amp;lc=US&amp;item_name=CodePrinter%20%2d%20Buy%20me%20a%20Coffee&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted" target="_blank" rel='noopener noreferrer'>buy him a cup of coffee</a>, or star the repository on <a href='https://github.com/jaredpetersen/codeprinter' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
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

export default Heart;
