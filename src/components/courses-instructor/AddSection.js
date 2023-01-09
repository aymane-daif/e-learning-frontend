import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

export default function AddSection() {
  const history = useHistory();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    watch,
    setError,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const submit = (data) => {
    console.log(data.name);
    console.log(id);
    history.push('/instructor/courses/12');
  };

  return (
    <form
      className='form w-100 text-center'
      id='kt_login_signup_form'
      onSubmit={handleSubmit(submit)}>
      <div className='mb-10 text-center mt-5'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create a new section</h1>
        {/* end::Title */}
      </div>
      {/* end::Heading */}
      <div className='row fv-row mb-7 col-8 mx-auto'>
        <div className='d-flex flex-column justify-content-center'>
          <label htmlFor='name' className='form-label fw-bolder text-dark fs-6'>
            Title*
          </label>
          <input
            autoComplete='off'
            placeholder='Section title'
            type='text'
            id='name'
            {...register('name', {
              required: true,
              minLength: {
                value: 6,
                message: 'section title should contains at least 6 characters',
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

        <Button className='px-10 mx-auto w-25 mt-20' type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
}
