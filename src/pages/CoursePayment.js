import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style/payment.css';
import CourseInfo from '../components/CoursePayment/CourseInfo';
import Payment from '../components/CoursePayment/Payment';
import CourseContent from '../components/CoursePayment/CourseContent';
import { useHttpClient } from '../security/hooks/axiosProvider';
import { useParams } from 'react-router-dom';
import { South } from '@mui/icons-material';

function CoursePayment() {
  const stripeKey = process.env.REACT_APP_STRIPE_KEY;
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

  function makePayment(token) {
    const data = {
      token: token.id,
      price: course.price,
    };
    httpClient.current?.post(`/payment/${id}`, data).then((response) => {
      console.log();
    });
  }

  return (
    <div className='body'>
      <Row className='mx-0 d-flex'>
        <Container className='mx-0 p-0 col-12 col-sm-10 col-md-8 col-lg-7'>
          <CourseInfo course={course} />
          <CourseContent course={course} />
        </Container>
        <Payment
          stripeKey={stripeKey}
          makePayment={makePayment}
          course={course}
        />
      </Row>
    </div>
  );
}

export default CoursePayment;
