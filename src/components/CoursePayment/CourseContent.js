import React, { useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

function CourseContent(){

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
        <AccordionItem>
            <AccordionHeader targetId="1">
                <h4>Intro to course and Python</h4>
            </AccordionHeader>
          <AccordionBody accordionId="1">
            
            <div className="py-3"><PlayCircleIcon className="me-2" /> Course intro</div>
          </AccordionBody>
        </AccordionItem>
        
        <AccordionItem>
            <AccordionHeader targetId="1">
                <h4>Setup</h4>
            </AccordionHeader>
          <AccordionBody accordionId="1">
            <div className="py-3"><PlayCircleIcon className="me-2"/>Instalation Setup and Overview</div>
            <div className="py-3"><PlayCircleIcon className="me-2" />IDEs and Course Resources</div>
            <div className="py-3"><PlayCircleIcon className="me-2"/>iPython/Jupyter Notebook Overview</div>
          </AccordionBody>
        </AccordionItem>

      </Accordion>
    
      <h1 className="mt-8 mb-6">Description</h1>
      <div className="fs-6 pb-5">
      This course will give you the resources to learn python and effectively use it analyze and visualize data! Start your career in Data Science!

You'll get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data. 

You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers! 

By the end of this course you will: 

- Have an understanding of how to program in Python. 

- Know how to create and manipulate arrays using numpy and Python. 

- Know how to use pandas to create and analyze data sets. 

- Know how to use matplotlib and seaborn libraries to create beautiful data visualization. 

- Have an amazing portfolio of example python data analysis projects! 

- Have an understanding of Machine Learning and SciKit Learn!

With 100+ lectures and over 20 hours of information and more than 100 example python code notebooks, you will be excellently prepared for a future in data science! 
      </div>
    </div>);

}

export default CourseContent;

