import React from 'react';
import ListCourses from '../../components/courses/ListCourses';

function HomeStudent() {
  return (
    <div className='px-0'>
      <div className=''>
        <h2 className='fw-bolder text-dark mb-0'>Learn something new!</h2>
        <span className='text-muted h6 mt-0'>
          Learn in-demand skills in half the time
        </span>
      </div>
      {/* <h1>Skill paths</h1>
        <ListPaths /> */}
      <h1>All courses</h1>
      <ListCourses />
    </div>
  );
}

export default HomeStudent;
