import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';
import { useHttpClient } from '../security/hooks/axiosProvider';

function ListCourses() {
  const httpClient = useHttpClient(true);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      httpClient.current?.get(`/courses`).then((response) => {
        const data = response.data;
        setCourses(data.content);
        console.log(data.content);
      });
    };
    getCourses();
  }, [httpClient]);

  return courses.map((course) => (
    <CourseItem
      key={course.id}
      name={course.name}
      description={course.description}
      instructorName={course.instructorDto.name}
      courseLevel={course.courseLevel}
      priceType={course.priceType}
    />
  ));
}
export default ListCourses;
