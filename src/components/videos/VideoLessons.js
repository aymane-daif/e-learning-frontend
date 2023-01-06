import React from 'react';
import { ListGroup, ListGroupItem, Card, Row, Col } from 'react-bootstrap';
import { KTSVG } from '../../shared/helpers/KTSVG';

const VideoLessons = () => {
  const videos = [
    { id: 1, title: 'Video 1', sectionId: 1, videoLength: '14;10' },
    { id: 2, title: 'Video 2', sectionId: 1, videoLength: '10;23' },
    { id: 3, title: 'Video 3', sectionId: 2, videoLength: '12;45' },
    { id: 4, title: 'Video 4', sectionId: 2, videoLength: '9;40' },
    { id: 5, title: 'Video 5', sectionId: 3, videoLength: '16;18' },
  ];

  const sections = [
    { id: 1, title: 'Section 1' },
    { id: 2, title: 'Section 2' },
    { id: 3, title: 'Section 3' },
  ];
  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md-3'>
          <Card className='bg-light mb-3'>
            <Card.Header className='font-weight-bold text-uppercase'>
              Videos
            </Card.Header>
            <ListGroup variant='flush'>
              {sections.map((section) => (
                <ListGroupItem key={section.id} className='pb-2'>
                  <h6 className='font-weight-bold mb-2'>{section.title}</h6>
                  {videos
                    .filter((video) => video.sectionId === section.id)
                    .map((video) => (
                      <Card key={video.id} className='mb-2'>
                        <Card.Body className='py-2 px-0'>
                          <Row className='d-flex align-items-center py-2'>
                            <Col sm='1'>
                              <KTSVG
                                path='/media/icons/duotune/general/circle.svg'
                                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500'
                              />
                            </Col>
                            <Col
                              sm='11'
                              className='d-flex align-items-baseline'>
                              {' '}
                              <KTSVG
                                path='/media/icons/duotune/general/video.svg'
                                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500'
                              />
                              <Card.Subtitle>
                                {video.title}({video.videoLength})
                              </Card.Subtitle>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </div>
        <div className='col-md-9'>{/* Other content goes here */}</div>
      </div>
    </div>
  );
};

export default VideoLessons;
