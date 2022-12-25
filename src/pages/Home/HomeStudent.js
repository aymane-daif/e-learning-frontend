import React from 'react';
import { Container } from 'react-bootstrap';
import ListCourses from '../../components/ListCourses';

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
    </Container>
  );
}

export default HomeStudent;
