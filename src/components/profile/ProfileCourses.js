import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import CardCourse from '../cards/CardCourse';
import { useHttpClient } from '../../security/hooks/axiosProvider';
const ProfileCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const user = useSelector((state) => state.user.user);
  const httpClient = useHttpClient(true);
  const getMyCourses = useCallback(() => {
    httpClient.current
      ?.get(`/user-courses/${user.userId}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setMyCourses(data);
      })
      .catch((error) => {
        console.log(error);

        setMyCourses([]);
      });
  }, [httpClient, user.userId]);
  useEffect(() => {
    getMyCourses();
  }, [getMyCourses]);

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>My Courses</h3>
        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'>
              <option value='Approved'>In Progress</option>
              <option value='In Progress'>Completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className='row g-6 g-xl-9'>
        {myCourses &&
          myCourses.map((course) => (
            <div className='col-md-6 col-xl-4' key={course.id}>
              <CardCourse
                image='/media/svg/brand-logos/figma-1.svg'
                badgeColor='primary'
                courseLevel={course.courseLevel}
                statusColor='primary'
                name={course.name}
                description={course.description}
                lastUpdated={course.lastUpdated}
                instructor={course.instructorDto.name}
                progress={50}
                id={course.id}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default ProfileCourses;
