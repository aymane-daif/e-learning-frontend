import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';

function ListCourses() {
  return new Array(3).fill(0).map(() => (
    <Row className='my-4'>
      {new Array(3).fill(0).map((_, i) => (
        <Col key={i}>
          <CourseItem />
        </Col>
      ))}
    </Row>
  ));
}

export default ListCourses;
