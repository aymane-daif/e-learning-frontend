
import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm({
    mode: "onChange",
  });
  const {keycloak ,intialized} = useKeycloak();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form
      className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      id="kt_login_signup_form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* begin::Heading */}
      <div className="mb-10 text-center">
        {/* begin::Title */}
        <h1 className="text-dark mb-3">Create an Account</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className="text-gray-400 fw-bold fs-4">
          {/* Link here */}
          <div
            onClick={()=>keycloak.login({redirectUri:window.location.origin+"/"})}
            className="link-primary fw-bolder"
            style={{ marginLeft: "5px" }}
          >
            Already have an account?
          </div>
        </div>
        {/* end::Link */}
      </div>
      {/* end::Heading */}

      <div className="d-flex align-items-center mb-10">
        <div className="border-bottom border-gray-300 mw-50 w-100"></div>
        <span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
        <div className="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>

      {/* begin::Form group Firstname */}
      <div className="row fv-row mb-7">
        <div className="col-xl-6">
          <label
            htmlFor="firstName"
            className="form-label fw-bolder text-dark fs-6"
          >
            First name
          </label>
          <input
            placeholder="First name"
            type="text"
            id="firstName"
            {...register("firstName", {
              required: true,
              minLength: {
                value: 2,
                message: "firstname should contains at least 2 characters",
              },
            })}
            className={`form-control form-control-lg form-control-solid ${
              errors.firstName ? "is-invalid" : "is-valid"
            }`}
          />
          {errors.firstName && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{errors.firstName?.message}</span>
              </div>
            </div>
          )}
        </div>

        <div className="col-xl-6">
          {/* begin::Form group Lastname */}
          <div className="fv-row mb-5">
            <label className="form-label fw-bolder text-dark fs-6">
              Last name
            </label>
            <input
              placeholder="Last name"
              type="text"
              autoComplete="off"
              {...register("lastName", {
                required: true,
                minLength: {
                  value: 2,
                  message: "lastname should contains at least 2 characters",
                },
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.lastName ? "is-invalid" : "is-valid"
              }`}
            />
            {errors.lastName && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{errors.lastName?.message}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Firstname */}
      <div className="row fv-row mb-7">
        <div className="col-xl-6">
          <label className="form-label fw-bolder text-dark fs-6">Phone</label>
          <input
            placeholder="Phone"
            type="tel"
            autoComplete="off"
            {...register("phone", {
              required: true,
              pattern: {
                value: /[0-9]{10}/,
                message: "this is not a phone number",
              },
            })}
            className={`form-control form-control-lg form-control-solid ${
              errors.phone ? "is-invalid" : "is-valid"
            }`}
          />
          {errors.phone && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{errors.phone?.message}</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-6">
          {/* begin::Form group Lastname */}
          <div className="fv-row mb-5">
            <label className="form-label fw-bolder text-dark fs-6">
              Date Of Birth
            </label>
            <input
              placeholder="Date of birth"
              type="date"
              autoComplete="off"
              {...register("dateOfBirth", {
                required: true,
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.dateOfBirth ? "is-invalid" : "is-valid"
              }`}
            />
            {errors.dateOfBirth && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{errors.dateOfBirth?.message}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className="row fv-row mb-7">
        <div className="col-xl-6">
          <label className="form-label fw-bolder text-dark fs-6">Email</label>
          <input
            placeholder="Email"
            type="email"
            autoComplete="off"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "this is not an email",
              },
            })}
            className={`form-control form-control-lg form-control-solid ${
              errors.email ? "is-invalid" : "is-valid"
            }`}
          />
          {errors.email && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{errors.email?.message}</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-6">
          {/* begin::Form group Nickname */}
          <div className="fv-row mb-5">
            <label className="form-label fw-bolder text-dark fs-6">
              Nickname
            </label>
            <input
              placeholder="Nickname"
              type="text"
              autoComplete="off"
              {...register("nickname", {
                required: true,
                minLength: {
                  value: 4,
                  message: "nickname contains at least 4 characters",
                },
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.nickname ? "is-invalid" : "is-valid"
              }`}
            />
            {errors.nickname && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{errors.nickname?.message}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className="row fv-row mb-7">
        <div className="col-xl-6">
          <label className="form-label fw-bolder text-dark fs-6">
            Password
          </label>
          <div className="position-relative mb-3">
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password should contains at least 6 characters",
                },
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.password ? "is-invalid" : "is-valid"
              }`}
            />
            {errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{errors.password?.message}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* begin::Form group Confirm password */}
        <div className="col-xl-6">
          <label className="form-label fw-bolder text-dark fs-6">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Password confirmation"
            {...register("passwordConfirmation", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val)
                  return "Your passwords do no match";
              },
            })}
            className={`form-control form-control-lg form-control-solid ${
              errors.passwordConfirmation ? "is-invalid" : "is-valid"
            }`}
          />
          {errors.passwordConfirmation && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{errors.passwordConfirmation?.message}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Role */}
      <div className="row fv-row mb-7">
        <div className="col-xl-6">
          <label className="form-label fw-bolder text-dark fs-6">
            Are you ?
          </label>
          <div className="position-relative mb-3">
            <select
              name="func"
              {...register("role", {
                required: true,
              })}
              className={`form-control form-control-lg form-control-solid ${
                errors.role ? "is-invalid" : "is-valid"
              }`}
            >
              <option value="STUDENT">Student</option>
              <option value="INSTRUCTOR">Instructor</option>
            </select>

            {errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{errors.password?.message}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="text-center">
        <button
          type="submit"
          id="kt_sign_up_submit"
          className="btn btn-lg btn-primary w-100 mb-5"
          disabled={false}
        >
          <span className="indicator-label">Submit</span>
        </button>
        <div to="/auth/login">
          <button
            type="button"
            id="kt_login_signup_form_cancel_button"
            className="btn btn-lg btn-light-primary w-100 mb-5"
          >
            Cancel
          </button>
        </div>
      </div>
      {/* end::Form group */}
    </form>
  );
};

export default AddUserForm;
