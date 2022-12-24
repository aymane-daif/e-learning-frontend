import React from 'react';
import { Container } from 'react-bootstrap';
import ListCourses from '../../components/ListCourses';
import ListPaths from '../../components/ListPaths';

function HomeStudent() {
  return (
    <Container>
      <div>
        <h2 className='fw-bolder text-dark mb-0'>Learn something new!</h2>
        <span className='text-muted h6 mt-0'>
          Learn in-demand skills in half the time
        </span>
      </div>
      {/* <h1>Skill paths</h1>
      <ListPaths /> */}
      <h1>All courses</h1>
      <ListCourses />

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

export default HomeStudent;
