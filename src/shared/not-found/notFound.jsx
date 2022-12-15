import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='error-wrapper'>
          <Container>
            <div className='error-heading'>
              <h2 className='headline font-danger'>{'404'}</h2>
            </div>
            <Col md='8 offset-md-2'>
              <p className='sub-content'>
                {
                  'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'
                }
              </p>
            </Col>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color='danger-gradien' size='lg'>
                Return to the main page
              </Button>
            </Link>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
