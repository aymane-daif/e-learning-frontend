import React, { useState, useEffect, useCallback } from 'react';
import { toAbsoluteUrl } from '../../shared/helpers/AssetHelpers';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHttpClient } from '../../security/hooks/axiosProvider';
import { useKeycloak } from '@react-keycloak/web';
import { userActions } from '../../store/redux/userSlice';

const ProfileDetails = () => {
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const httpClient = useHttpClient(true);
  const { keycloak } = useKeycloak();

  const updateUser = (user) => {
    httpClient.current
      .patch(`http://localhost:8081/users/${keycloak.idTokenParsed.sub}`, user)
      .then((response) => {
        console.log(response.data);
      });
  };
  const onSubmit = (data) => {
    const user = {
      userId: data.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      nickname: data.nickname,
    };
    console.log(user);
    updateUser(user);
    dispatch(userActions.setCurrentUser(user));
  };

  useEffect(() => {
    reset(currentUser);
  }, [currentUser]);
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const [loading, setLoading] = useState(false);
  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'>
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Profile Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                Avatar
              </label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      '/media/avatars/blank.png'
                    )})`,
                  }}>
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{
                      backgroundImage: `url(${toAbsoluteUrl(
                        '/media/avatars/300-1.jpg'
                      )})`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Full Name
              </label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...register('firstName', {
                        required: true,
                        minLength: {
                          value: 2,
                          message:
                            'firstname should contains at least 2 characters',
                        },
                      })}
                    />
                    {errors.firstName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          {errors.firstName?.message}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...register('lastName', {
                        required: true,
                        minLength: {
                          value: 2,
                          message:
                            'firstname should contains at least 2 characters',
                        },
                      })}
                    />
                    {errors.lastName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          {errors.lastName?.message}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Date of birth
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Date of birth'
                  {...register('dateOfBirth', {
                    required: true,
                  })}
                />
                {errors.dateOfBirth && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      {errors.dateOfBirth?.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Nickname</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Nickname'
                  {...register('nickname', {
                    required: true,
                    minLength: {
                      value: 4,
                      message: 'nickname contains at least 4 characters',
                    },
                  })}
                />
                {errors.nickname && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      {errors.nickname?.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Email</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='email'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Email'
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'this is not an email',
                    },
                  })}
                />
                {errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{errors.email?.message}</div>
                  </div>
                )}
              </div>
            </div>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Contact Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...register('phone', {
                    required: true,
                    pattern: {
                      value: /[0-9]{10}/,
                      message: 'this is not a phone number',
                    },
                  })}
                />
                {errors.phone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{errors.phone?.message}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span
                  className='indicator-progress'
                  style={{ display: 'block' }}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ProfileDetails };
