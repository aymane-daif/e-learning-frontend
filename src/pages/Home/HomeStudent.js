import React from 'react';
import ListCourses from '../../components/courses/ListCourses';
import BoltIcon from '@mui/icons-material/Bolt';

function HomeStudent() {
  return (
    <div className='px-0'>
      <div className=''>
        <h1 className='fw-bolder text-dark display-5 mt-2 text-left'>
          Learn something new!
        </h1>
        <span
          className='text-muted h6 mt-0'
          style={{ marginBottom: '4rem', display: 'inline-block' }}>
          Learn in-demand skills in half the time
        </span>
      </div>
      {/* <h1>Skill paths</h1>
        <ListPaths /> */}
      <div className='d-flex'>
        <BoltIcon fontSize='large' color='secondary' />
        <h1>All courses</h1>
      </div>
      <ListCourses />
    </div>
  );
}

export default HomeStudent;
