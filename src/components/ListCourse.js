import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';

function ListCourse() {
  return (
    <Container>
      <h3>
        <h2 className='fw-bolder text-dark mb-0'>Learn something new!</h2>
        <span className='text-muted h6 mt-0'>
          Learn in-demand skills in half the time
        </span>
      </h3>
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
