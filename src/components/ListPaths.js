import React from 'react';
import PathItem from './PathItem';
import { Col, Row } from 'react-bootstrap';

function ListPaths() {
  return new Array(3).fill(0).map(() => (
    <Row className='my-4'>
      {new Array(3).fill(0).map((_, i) => (
        <Col key={i}>
          <PathItem />
        </Col>
      ))}
    </Row>
  ));
}

export default ListPaths;
