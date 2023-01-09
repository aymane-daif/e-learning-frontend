import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/payment.css';
import CourseInfo from '../components/CoursePayment/CourseInfo';
import Payment from '../components/CoursePayment/Payment';
import CourseContent from '../components/CoursePayment/CourseContent';
import { useHttpClient } from '../security/hooks/axiosProvider';
import { useParams } from 'react-router-dom';
import hasRoles from '../security/hasRoles';

function CoursePayment() {

    let { id } = useParams();

    const httpClient = useHttpClient(true);
    const [course, setCourse] = useState(null);

    const getCourseById = useCallback(() => {
        httpClient.current?.get(`/courses/${id}`).then((response) => {
        const { data } = response;
        setCourse(data);
        console.log(data);
        });
    }, [httpClient, id]);

    useEffect(() => {
        getCourseById();
    }, [getCourseById]);

  return (
    <div>
      <Row className='mx-0 d-flex'>
        <Col sm='7'>
          <Container className='mx-0 p-0 '>
            {' '}
            {course && (
              <>
                <CourseInfo course={course} />
                <CourseContent course={course} page="student" />
              </>
            )}
          </Container>
        </Col>
        <Col sm='5'>
          <Payment course={course} page="student" />
        </Col>
      </Row>
    </div>
  );
}

export default CoursePayment;
