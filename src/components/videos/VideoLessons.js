import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
const course = {
  id: 5,
  name: 'Build an app with ASPNET Core and Angular from scratch',
  description:
    'A practical example of how to build an application with ASP.NET Core API and Angular from start to finish',
  price: 700,
  image: null,
  noStudents: 70,
  lastUpdated: '2023-01-06T23:00:00.000+00:00',
  courseLevel: 'INTERMEDIATE',
  priceType: 'PREMIUM',
  instructorDto: {
    id: 2,
    name: 'Billy Abbie',
    noCourses: 2,
  },
  sectionDtos: [
    {
      id: 21,
      name: 'Introduction to ASP.NET',
      lessonsDtos: [
        {
          id: 76,
          name: 'ASP.NET with Angular and Authentication',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 75,
          name: 'ASP.NET with Angular and Entity Framework',
          lessonType: 'VIDEO',
          done: false,
        },
      ],
    },
    {
      id: 20,
      name: 'Introduction to Angular',
      lessonsDtos: [
        {
          id: 67,
          name: 'Components and Templates in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 71,
          name: 'Forms and Validation in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 73,
          name: 'Pipes and Custom Directives in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 68,
          name: 'Data Binding and Directives in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 74,
          name: 'Unit Testing and Deployment in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 70,
          name: 'Routing and Navigation in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 66,
          name: 'Setting up an ASP.NET with Angular Project',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 69,
          name: 'Services and Dependency Injection in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 72,
          name: 'HttpClient and Observables in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 65,
          name: 'Introduction to ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
      ],
    },
    {
      id: 22,
      name: 'Integrate ASP.NET with Angular',
      lessonsDtos: [
        {
          id: 78,
          name: 'ASP.NET with Angular and Serverless Functions',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 79,
          name: 'ASP.NET with Angular and SignalR',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 77,
          name: 'ASP.NET with Angular and Deployment to Azure',
          lessonType: 'VIDEO',
          done: false,
        },
      ],
    },
    {
      id: 23,
      name: 'Project using ASP.NET with Angular',
      lessonsDtos: [
        {
          id: 80,
          name: 'ASP.NET with Angular and TypeScript',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 83,
          name: 'Advanced Topics in ASP.NET with Angular',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 82,
          name: 'ASP.NET with Angular and PWA',
          lessonType: 'VIDEO',
          done: false,
        },
        {
          id: 81,
          name: 'ASP.NET with Angular and GraphQL',
          lessonType: 'VIDEO',
          done: false,
        },
      ],
    },
  ],
};
const VideoLessons = () => {
  const [currentVideo, setCurrentVideo] = useState(
    course.sectionDtos[0].lessonsDtos[0]
  );

  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md-3'>
          <Card className='bg-light mb-3'>
            <h1 className='font-weight-bold'>{course.name}</h1>
            <ListGroup variant='flush'>
              {course.sectionDtos.map((section) => (
                <ListGroupItem key={section.id} className='pb-2'>
                  <h6 className='font-weight-bold my-2'>{section.name}</h6>
                  {section.lessonsDtos.map((video, idx) => (
                    <Card key={video.id} className='mb-2'>
                      <ListGroup.Item
                        action
                        className='p-0 videoItem'
                        onClick={() => {
                          setCurrentVideo(video);
                        }}>
                        <Row
                          className='d-flex align-items-center py-2'
                          style={{ opacity: '.75' }}>
                          <Col sm='1' className='px-2'>
                            {video.done ? (
                              <CircleIcon color='success' />
                            ) : (
                              <>
                                {currentVideo.id === video.id ? (
                                  <CircleOutlinedIcon color='primary' />
                                ) : (
                                  <CircleOutlinedIcon />
                                )}
                              </>
                            )}
                          </Col>

                          <Col sm='1' className='px-2'>
                            {' '}
                            <OndemandVideoIcon />
                          </Col>
                          <Col sm='10' className='d-flex '>
                            <Card.Subtitle style={{ fontSize: '90%' }}>
                              {video.name}(24:22)
                            </Card.Subtitle>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {idx !== section.lessonsDtos.length - 1 && (
                        <hr className='w-100 my-2' />
                      )}
                    </Card>
                  ))}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </div>
        <div className='col-md-9'>
          <h2>{currentVideo.name}</h2>
          <Button variant='info'>Complete and Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoLessons;
