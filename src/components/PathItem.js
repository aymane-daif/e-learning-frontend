import React from 'react';
import Card from 'react-bootstrap/Card';

function PathItem() {
  return (
    <Card style={{ backgroundColor: '#1F2034' }}>
      <Card.Img variant='top' src='/img-16.jpg' style={{ height: '12rem' }} />
      <Card.Body>
        <Card.Title> Cup &amp; Green</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex align-items-center justify-content-between'>
        <Card.Subtitle>6 Sections</Card.Subtitle>
        <Card.Link href='#'>Get Started</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default PathItem;
