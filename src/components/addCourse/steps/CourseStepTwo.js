import React from "react";

export default function CourseStepTwo({register,errors}){

  return(
  <div className="mt-5">

    {/* begin::Form group Course description */}

    <div className='row fv-row mb-7'>
        <div>
            <label
              htmlFor='description'
              className='form-label fw-bolder text-dark fs-6'>
              Description*
            </label>
            <textarea
              placeholder='Course description'
              type='text'
              rows={5}
              id='description'
              {...register('description', {
                required: true,
                minLength: {
                  value: 10,
                  message: 'description title should contains at least 20 characters',
                },
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.description ? 'is-invalid' : ''
              }`}
            />
            {errors.description && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.description?.message}</span>
                </div>
              </div>
            )}
        </div>
    </div>
    {/* end::Form group */}
      
  </div>
  );
}