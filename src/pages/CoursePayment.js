import React from "react";
import { Container, Row } from "react-bootstrap";
import "../style/payment.css";
import CourseInfo from "../components/CoursePayment/CourseInfo";
import Payment from "../components/CoursePayment/Payment";
import CourseContent from "../components/CoursePayment/CourseContent";

function CoursePayment(){

    const stripeKey = process.env.REACT_APP_STRIPE_KEY;

    return (
        <div className="body">
            <Row className="mx-0 d-flex">
                <Container className="mx-0 p-0 col-12 col-sm-10 col-md-8 col-lg-7">
                    <CourseInfo />
                    <CourseContent/>
                </Container>

                <Payment stripeKey={stripeKey}/>
            </Row>
        </div>
   );
}

export default CoursePayment;