import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';
import { useHttpClient } from '../security/hooks/axiosProvider';

function ListCourses() {
  const httpClient = useHttpClient(true);

  useEffect(() => {
    const getCourses = async () => {
      httpClient.current?.get(`/courses`).then((response) => {
        const data = response.data;
        console.log(data);
      });
    };
    getCourses();
  }, [httpClient]);

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
