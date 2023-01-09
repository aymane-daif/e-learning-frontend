import React, { useState, useCallback, useEffect } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useHttpClient } from '../../security/hooks/axiosProvider';
import '../../style/videos.css';
import { useSelector } from 'react-redux';

const VideoLessons = () => {
  const user = useSelector((state) => state.user.user);
  let history = useHistory();

  const httpClient = useHttpClient(true);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState(null);
  const [currentLesson, setCurrentLesson] = useState({});
  const [currentVideoUri, setCurrentVideoUri] = useState(null);

  const getVideoUri = (videos, lesson) => {
    let lessonId = lesson?.id || 1;
    return videos
      .filter((v) => v.lessonId === lessonId)
      .map((v) => `${v.sharedPath}/download/${v.path.split('/')[3]}`)[0];
  };

  const getVideos = useCallback(
    (id) => {
      httpClient.current?.get(`/media/${id}`).then((response) => {
        const data = response.data;
        setVideos(data);
        console.log(currentLesson, '');
        let uri = getVideoUri(data, currentLesson);
        setCurrentVideoUri(uri);
      });
    },
    [currentLesson, httpClient]
  );

  const getCourseById = useCallback(() => {
    httpClient.current?.get(`/courses/${id}`).then((response) => {
      const { data } = response;
      setCourse(data);
      const cLesson = data?.sectionDtos[0]?.lessonsDtos[0];
      setCurrentLesson(cLesson);
      getVideos(data?.id);
    });
  }, [httpClient, id]);

  const updateLessonById = useCallback(() => {
    httpClient.current
      ?.patch(`/courses/lessons/${currentLesson.id}`, currentLesson)
      .then((response) => {
        const { data } = response;
        console.log(data);
        // let tempCourse = course;
        // for (let i = 0; i < tempCourse.sectionDtos.length; i++) {
        //   const sectionDto = tempCourse.sectionDtos[i];
        //   for (let j = 0; j < sectionDto.lessonsDtos.length; j++) {
        //     let lessonDto = sectionDto.lessonsDtos[j];
        //     if (lessonDto.id === data.id) {
        //       lessonDto = data;
        //     }
        //   }
        // }
        getCourseById(course?.id);
      });
  }, [course?.id, currentLesson, getCourseById, httpClient]);

  useEffect(() => {
    getCourseById();
  }, [getCourseById]);

  const completeLesson = () => {
    setCurrentLesson((prevState) => ({
      ...prevState,
      done: true,
    }));
    updateLessonById();
  };

  const createCertif = useCallback(() => {
    console.log(course, 'course');
    const c = {
      issuedDate: new Date(),
      courseId: course?.id,
      userId: user?.userId,
      courseTitle: course?.name,
      userFullname: user?.firstName + ' ' + user?.lastName,
    };
    httpClient.current?.post(`/certifications`, c).then((response) => {
      const { data } = response;
      history.push('/certifications/' + data);
    });
  }, [
    course,
    history,
    httpClient,
    user?.firstName,
    user?.lastName,
    user?.userId,
  ]);

  return (
    <div
      className='container-fluid p-0'
      style={{ marginTop: '6rem', overflowX: 'hidden' }}>
      {course && videos && currentVideoUri && (
        <div className='row'>
          <div className='col-md-3 sidebar'>
            <Card className='bg-light mb-3'>
              <h1 className='font-weight-bold'>{course.name}</h1>
              <ListGroup variant='flush'>
                {course.sectionDtos.map((section, i) => (
                  <ListGroupItem key={section.id} className='pb-2'>
                    <h6 className='font-weight-bold my-2'>{section.name}</h6>
                    {section.lessonsDtos.map((lesson, idx) => (
                      <Card key={lesson.id} className='mb-2'>
                        <ListGroup.Item
                          action
                          className='p-0 videoItem'
                          onClick={() => {
                            setCurrentLesson(lesson);
                            console.log(currentLesson);
                            setCurrentVideoUri(getVideoUri(videos, lesson));
                          }}>
                          <Row
                            className='d-flex align-items-center py-2'
                            style={{ opacity: '.75' }}>
                            <Col sm='1' className='px-2'>
                              {lesson.done ? (
                                <CircleIcon color='success' />
                              ) : (
                                <>
                                  {currentLesson.id === lesson.id ? (
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
                                {lesson.name}(24:22)
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
          <div className='col-md-9 mb-5 content'>
            <h2>{currentLesson?.name}</h2>
            <div className='d-flex flex-column'>
              <video
                src={new URL(currentVideoUri)?.href}
                controls
                style={{
                  height: '30vw',
                  marginBottom: '2rem',
                  width: '90%',
                }}></video>
              <Button variant='info mx-auto' onClick={completeLesson}>
                Complete and Continue
              </Button>
              <div
                onClick={createCertif}
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  opacity: '0',
                }}>
                ok
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLessons;
