import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import CourseContent from "../CoursePayment/CourseContent"
import CourseInfo from "../CoursePayment/CourseInfo"
import Payment from "../CoursePayment/Payment";


export default function CourseDetails(){
    const data = {
        "id": 1,
        "name": "Complete React Developer",
        "description": "Build enterprise level React applications and deploy to production",
        "price": 250,
        "image": null,
        "noStudents": 1000,
        "lastUpdated": "2023-01-08",
        "courseLevel": "BEGINNER",
        "priceType": "PREMIUM",
        "instructorDto": {
            "id": 1,
            "name": "Aaron Carla",
            "noCourses": 3
        },
        "sectionDtos": [
            {
                "id": 2,
                "name": "Basics of React",
                "lessonsDtos": [
                    {
                        "id": 2,
                        "name": "Components and JSX",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 3,
                        "name": "Props and state",
                        "lessonType": "VIDEO",
                        "done": false
                    }
                ]
            },
            {
                "id": 4,
                "name": "Advanced React",
                "lessonsDtos": [
                    {
                        "id": 8,
                        "name": "Testing",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 9,
                        "name": "Deployment",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 10,
                        "name": "Performance optimization",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 7,
                        "name": "Async requests",
                        "lessonType": "VIDEO",
                        "done": false
                    }
                ]
            },
            {
                "id": 1,
                "name": "Introduction to React",
                "lessonsDtos": [
                    {
                        "id": 1,
                        "name": "Introduction to React",
                        "lessonType": "VIDEO",
                        "done": false
                    }
                ]
            },
            {
                "id": 3,
                "name": "Practical React",
                "lessonsDtos": [
                    {
                        "id": 5,
                        "name": "Lifecycle methods",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 6,
                        "name": "Routing",
                        "lessonType": "VIDEO",
                        "done": false
                    },
                    {
                        "id": 4,
                        "name": "Events and forms",
                        "lessonType": "VIDEO",
                        "done": false
                    }
                ]
            }
        ]
    }
    const resutl =JSON.stringify(data);

    const course = JSON.parse(
        resutl
    )
        return (
        <div>
            <Row className='mx-0 d-flex'>
            <Col sm='7'>
                <Container className='mx-0 p-0 '>
                {' '}
                {course && (
                    <>
                    <CourseInfo course={course} />
                    <CourseContent course={course} page="instructor" />
                    </>
                )}
                </Container>
            </Col>
            <Col sm='5'>
                <Payment course={course} page="instructor" />
            </Col>
            </Row>
    </div>
    );
}