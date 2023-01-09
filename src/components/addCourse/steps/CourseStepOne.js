import React from 'react';

export default function CourseStepOne({ register, errors }) {
  return (
    <div className='mt-5'>
      <div className='row fv-row mb-7'>
        <div>
          <label htmlFor='name' className='form-label fw-bolder text-dark fs-6'>
            Title*
          </label>
          <input
            autoComplete='off'
            placeholder='Course title'
            type='text'
            id='name'
            {...register('name', {
              required: true,
              minLength: {
                value: 10,
                message: 'course title should contains at least 10 characters',
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
      </div>
      {/* end::Form group */}

      {/* begin::Form group courseLevel */}

      {/* end::Form group courseLevel */}
      <div className='row fv-row mb-7'>
        <div>
          <label className='form-label fw-bolder text-dark fs-6'>
            Course level*
          </label>
          <div className='position-relative mb-3'>
            <select
              name='courseLevel'
              {...register('courseLevel', {
                required: true,
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.courseLevel ? 'is-invalid' : ''
              }`}>
              <option value='BEGINNER'>Beginner</option>
              <option value='INTERMEDIATE'>Intermediate</option>
              <option value='EXPERT'>Expert</option>
            </select>
          </div>
        </div>
      </div>
      {/* begin::Form group priceType */}
      <div className='row fv-row mb-7'>
        <div className='col-xl-6'>
          <label className='form-label fw-bolder text-dark fs-6'>
            Price type*
          </label>
          <div className='position-relative mb-3'>
            <select
              name='priceType'
              {...register('priceType', {
                required: true,
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.priceType ? 'is-invalid' : ''
              }`}>
              <option value='FREE'>FREE</option>
              <option value='PREMIUM'>PREMIUM</option>
            </select>
          </div>
        </div>

        <div className='col-xl-6'>
          <label className='form-label fw-bolder text-dark fs-6'>Price*</label>
          <input
            placeholder='Course price in dollar'
            type='price'
            autoComplete='off'
            {...register('price', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: 'the price must be a positive number',
              },
            })}
            className={`form-control form-control-lg form-control-solid ${
              errors.price ? 'is-invalid' : ''
            }`}
          />
          {errors.price && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{errors.price?.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
