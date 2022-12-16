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
      <ul className='pagination'>
        <li className='page-item previous'>
          <a href='#' className='page-link'>
            <i className='previous'></i>
          </a>
        </li>

        <li className='page-item active'>
          <a href='#' className='page-link'>
            1
          </a>
        </li>

        <li className='page-item'>
          <a href='#' className='page-link'>
            2
          </a>
        </li>

        <li className='page-item'>
          <a href='#' className='page-link'>
            3
          </a>
        </li>

        <li className='page-item'>
          <a href='#' className='page-link'>
            4
          </a>
        </li>

        <li className='page-item'>
          <a href='#' className='page-link'>
            5
          </a>
        </li>

        <li className='page-item'>
          <a href='#' className='page-link'>
            6
          </a>
        </li>

        <li className='page-item next'>
          <a href='#' className='page-link'>
            <i className='next'></i>
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default ListCourse;
