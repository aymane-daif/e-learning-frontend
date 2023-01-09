import React, { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';


function CourseContent({ course ,page }) {

  const sections = course?.sectionDtos;

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
 
  return (
    <div className='c-content-container'>
      <h1 className='my-8'>Course content</h1>
      <Accordion open={open} toggle={toggle}>
        {sections?.map((section) => (
          <AccordionItem key={section.id}>
            <AccordionHeader targetId={section.id.toString()}>
              <h4>{section.name}</h4>
            </AccordionHeader>
            <AccordionBody accordionId={section.id.toString()}>
              {section.lessonsDtos.map((lesson) => (
                <div className='py-3 vedio-title' key={lesson.id}>
                  <PlayCircleIcon className='me-2 play-icon' />
                  {lesson.name}
                </div>
              ))}

                <div className='py-3 play-icon mt-5'>
                  <Link to={"/addLesson/"+section.id}  className="play-icon" key="-1">
                    <AddCircleIcon className='me-2 play-icon' />
                    Add lesson 
                  </Link>
                </div>
            </AccordionBody>
          </AccordionItem>
        ))}
        
        {
          page=="instructor"
          &&
          <Link to={"/addSection/"+course.id}>
              <AccordionItem disabled key="-1" className='mt-5'>
              <AccordionHeader targetId="-1">
                <div className='d-flex justify-content-between'>
                  <h4 className="me-5">Add new section</h4>
                  <AddCircleIcon />
                </div>
              </AccordionHeader>
            </AccordionItem>
          </Link>
        }

      </Accordion>

      <h1 className='mt-8 mb-6'>Description</h1>
      <div className='fs-6 pb-5'>{course?.description}</div>
    </div>
  );
}

export default CourseContent;
