import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseContent from '../CoursePayment/CourseContent';
import CourseInfo from '../CoursePayment/CourseInfo';
import Payment from '../CoursePayment/Payment';

export default function CourseDetails() {
  const data = {
    id: 1,
    name: 'Learn java from scratch',
    description: 'Learn java from scratch',
    price: 200,
    image: null,
    noStudents: 0,
    lastUpdated: new Date(),
    courseLevel: 'BEGINNER',
    priceType: 'PREMIUM',
    instructorDto: {
      id: 12,
      name: 'Abderrazak Nejoui',
      noCourses: 1,
    },
    sectionDtos: [
      {
        id: 2,
        name: 'Introduction java',
        lessonsDtos: [
          {
            id: 2,
            name: 'Java syntaxe',
            lessonType: 'VIDEO',
            done: false,
          },
          //   {
          //     id: 3,
          //     name: 'Props and state',
          //     lessonType: 'VIDEO',
          //     done: false,
          //   },
        ],
      },
    ],
  };
  const resutl = JSON.stringify(data);

  const course = JSON.parse(resutl);
  return (
    <div>
      <Row className='mx-0 d-flex'>
        <Col sm='7'>
          <Container className='mx-0 p-0 '>
            {' '}
            {course && (
              <>
                <CourseInfo course={course} />
                <CourseContent course={course} page='instructor' />
              </>
            )}
          </Container>
        </Col>
        <Col sm='5'>
          <Payment course={course} page='instructor' />
        </Col>
      </Row>
    </div>
  );
}
