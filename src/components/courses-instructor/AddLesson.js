
import { CloudUpload } from "@mui/icons-material";
import React from "react"
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom"

export default function AddLesson(){

  const {id} = useParams();

  const {
    register,
    formState: { errors },
    watch,
    setError,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });


  const submit =()=>{

    console.log("awa");
    
  }
  return  (
    <form
      className='form w-100 text-center'
    id='kt_login_signup_form'
    onSubmit={handleSubmit(submit)}
    > 
      <div className='mb-10 text-center mt-5'>
      {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create a new Lesson</h1>
      {/* end::Title */}
      </div>
      {/* end::Heading */}
       <div className='row fv-row mb-7 col-8 mx-auto'>
        <div className="d-flex flex-column justify-content-center">
            <label
              htmlFor='name'
              className='form-label fw-bolder text-dark fs-6'>
              Title*
            </label>
            <input
              placeholder='Section title'
              type='text'
              id='name'
              {...register('name', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'lesson title should contains at least 6 characters',
                },
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.name ? 'is-invalid' : ''
              }`}
            />
            {errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.name?.message}</span>
                </div>
              </div>
            )}
        </div>

        <div className="mt-5 d-flex justify-content-center flex-column">
          <div className='form-label fw-bolder text-dark fs-6 mt-5'>Vedio*</div>
          <label htmlFor="image">
              <CloudUpload sx={{fontSize:200,color:"orange",cursor:"pointer"}} />
          </label>
          <input type="file" name="image" id="image"  
          className="d-none" 
        />

        </div>

        <Button className="px-10 mx-auto w-25 mt-20" type='submit'>
          Submit
        </Button>

      </div>
    </form>

  );

}