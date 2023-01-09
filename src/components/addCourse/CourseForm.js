
import React from "react";
import { useForm } from 'react-hook-form';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CourseStepOne from "./steps/CourseStepOne";
import { Button } from "react-bootstrap";
import CourseStepTwo from "./steps/CourseStepTwo";
import CourseStepThree from "./steps/CourseStepThree";
import { useHttpClient } from "../../security/hooks/axiosProvider";

const steps = ['Step 1','Step 2', 'Step 3'];


export default function CourseForm(){

  const {
    register,
    formState: { errors },
    watch,
    setError,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const httpClient = useHttpClient(true,true)

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [courseImage,setCourseImage] = React.useState(null);

  const weAreInTheLastStep = activeStep ==  steps.length-1;

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function renderCurrentStepLayout(){

    switch(activeStep){

      case 0: return <CourseStepOne register={register} errors={errors} />
      case 1: return <CourseStepTwo register={register} errors={errors} />
      case 2: return <CourseStepThree register={register} errors={errors} setCourseImage={setCourseImage} />

    }

  }

  const onSubmit = (data) => {

    if(!weAreInTheLastStep){
      handleNext();
    }
    else{
      const formData = new formData();
      formData.append("name",data.name);
      formData.append("courseLevel",data.courseLevel);
      formData.append("priceType",data.priceType);
      formData.append("price",data.price);
      formData.append("description",data.description);
      formData.append("image",data.courseImage);
      
      httpClient?.current("/courses",formData).then(responce=>{
        data = responce.data;
        console.log(data);
      })
    }
    
  };

  const courseImageVerification = (files)=>{

    const image = files[0];
    const imagePattern = new RegExp("^.+\.(jpg||png)")
    if(image == null){
      setError('file', { type: 'file', message: 'Course image is required' });
    }    

  }

  return (
    <form
    className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
    id='kt_login_signup_form'
    onSubmit={handleSubmit(onSubmit)}>
    {/* begin::Heading */}
    <div className='mb-10 text-center'>
      {/* begin::Title */}
      <h1 className='text-dark mb-3'>Create a new Course</h1>
      {/* end::Title */}
    </div>
    {/* end::Heading */}

    <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} className>{label}</StepLabel>
            </Step>
          );
        })}
    </Stepper>
      
    {
      renderCurrentStepLayout()
    }

    <div className={ "d-flex " +
     (activeStep==0?"justify-content-center":"justify-content-between")}>

      {activeStep!=0&&<Button className="px-10" onClick={handleBack} >Back</Button>}
      <Button className="px-10" type='submit'>
        {weAreInTheLastStep?"Submit":"Next"}
      </Button>

    </div>

  </form>
  );
}