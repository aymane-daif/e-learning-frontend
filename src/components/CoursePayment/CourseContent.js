import React, { useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

function CourseContent({course}){

    const sections = course?.sectionDtos; 

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
      setOpen();
      } else {
      setOpen(id);
      }
    };

   return(
   <div className="c-content-container">

        <h1 className="my-8">Course content</h1>
        <Accordion open={open} toggle={toggle}>
            {sections?.map(section=>
              <AccordionItem>
                <AccordionHeader targetId={section.id}>
                    <h4>{section.name}</h4>
                </AccordionHeader>
                <AccordionBody accordionId={section.id}>
                    {section.lessonsDtos.map(
                      lesson=>
                       <div className="py-3 vedio-title">
                          <PlayCircleIcon className="me-2 play-icon" />
                          {lesson.name}
                        </div>
                    )}             
                </AccordionBody>
            </AccordionItem>
            )}
        
      </Accordion>
    
      <h1 className="mt-8 mb-6">Description</h1>
      <div className="fs-6 pb-5">
        {course?.description}
      </div>
    </div>);

}

export default CourseContent;

