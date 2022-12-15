import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';

function ListCourse() {
  return (
    <Container>
      {new Array(3).fill(0).map(() => (
        <Row className='my-4'>
          {new Array(3).fill(0).map(() => (
            <Col>
              <CourseItem />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default ListCourse;
