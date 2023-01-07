import React, { useState } from 'react';
import {
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
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { fromLevelToColor } from '../../shared/helpers/customClass';
import { cartActions } from '../../store/redux/cartSlice';
import { useHttpClient } from '../../security/hooks/axiosProvider';
import '../../style/cart.css';

const ShoppingCart = () => {
  const stripeKey = process.env.REACT_APP_STRIPE_KEY;

  const [isPaymentValid, setIsPaymentValid] = useState(false);

  const httpClient = useHttpClient(true);

  const dispatch = useDispatch();

  const courses = useSelector((state) => state.cart.courses);

  const total = courses.reduce((acc, course) => acc + course.price, 0);

  const removeFromCart = (id) => {
    dispatch(cartActions.removeCourseFromCart(id));
  };

  function makePayment(token) {
    const data = {
      token: token.id,
      price: total,
      coursesIds: courses.map((course) => course.id),
    };

    httpClient.current?.post('/payment', data).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setIsPaymentValid(true);
        console.log('done');
        dispatch(cartActions.clearCart());
      }
    });
  }

  if (isPaymentValid) {
    return <Alert variant='success'>Payment processed successfully!</Alert>;
  }

  return (
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
                      By {course.instructorDto.name}
                    </CardSubtitle>
                    <Badge pill bg={`${fromLevelToColor(course.courseLevel)}`}>
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
        <StripeCheckout stripeKey={stripeKey} token={makePayment}>
          <Button color='success'>Checkout</Button>
        </StripeCheckout>
      </Col>
    </Row>
  );
};

export default ShoppingCart;
