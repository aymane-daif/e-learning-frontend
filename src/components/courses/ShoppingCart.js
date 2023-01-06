import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  Button,
  CardFooter,
} from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
import '../../style/cart.css';

import { fromLevelToColor } from '../../shared/helpers/customClass';
const ShoppingCart = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Reactive Microservices with Spring WebFlux',
      price: 50,
      instructor: 'John Doe',
      courseLevel: 'BEGINNER',
    },
    {
      id: 2,
      name: 'Java Lambda & Streams',
      price: 100,
      instructor: 'Jane Doe',
      courseLevel: 'INTERMEDIATE',
    },
    {
      id: 3,
      name: 'Examples With Selenium WebDriver',
      price: 150,
      instructor: 'John Smith',
      courseLevel: 'EXPERT',
    },
  ]);

  const total = courses.reduce((acc, course) => acc + course.price, 0);

  const onCheckout = () => {
    //TODO: do checkout here!!!
  };
  const removeFromCart = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col sm='8'>
          <h3>Shopping Cart</h3>
          <ListGroup>
            {courses.map((course) => (
              <Card key={course.id} style={{ marginBottom: '1.25rem' }}>
                <Row>
                  <Col sm='2'>
                    <div className='symbol symbol-100px'>
                      <img src='/img-16.jpg' alt='' />
                    </div>
                  </Col>
                  <Col sm='7'>
                    <CardBody className='p-0 h-100 d-flex flex-column align-items-start justify-content-center'>
                      <CardTitle tag='h5' className='mb-2'>
                        {course.name}
                      </CardTitle>
                      <CardSubtitle className='mb-2'>
                        By {course.instructor}
                      </CardSubtitle>
                      <Badge
                        pill
                        bg={`${fromLevelToColor(course.courseLevel)}`}>
                        {course.courseLevel}
                      </Badge>
                    </CardBody>
                  </Col>
                  <Col sm='3'>
                    <CardFooter className='p-0 h-100 d-flex flex-column align-items-center justify-content-center'>
                      <Badge pill bg='info'>
                        ${course.price}
                      </Badge>
                      <span
                        className='text-danger customBtn mt-2'
                        onClick={() => removeFromCart(course.id)}>
                        Remove
                      </span>
                    </CardFooter>
                  </Col>
                </Row>
              </Card>
            ))}
          </ListGroup>
        </Col>
        <Col sm='4'>
          <h3>Total: ${total}</h3>
          <Button color='success' onClick={onCheckout}>
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
