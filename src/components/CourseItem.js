import React from 'react';
import Card from 'react-bootstrap/Card';

function CourseItem() {
  return (
    <div className='card mb-5 mb-xxl-8`'>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src='/img-16.jpg' alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <a
                href='#'
                className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Sam Logan
              </a>

              <span className='text-gray-400 fw-bold'>Mango, Java, Python</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}

          {/* begin::Menu */}
          <div className='my-0'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'>
              lo
            </button>
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-5'>
          {/* begin::Image */}
          <div
            className='bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5'
            style={{
              backgroundImage: `url('/img-16.jpg')`,
            }}></div>
          {/* end::Image */}

          {/* begin::Text */}
          <div className='text-gray-800 mb-5'>
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </div>
          {/* end::Text */}

          {/* begin::Toolbar */}
          <div className='d-flex align-items-center justify-content-between mb-5'>
            <div className='card-toolbar'>
              <span
                className={`badge badge-light-success fw-bolder me-auto px-4 py-3`}>
                Beginner
              </span>
            </div>

            <a
              href='#'
              className='btn btn-sm btn-light btn-color-muted px-4 py-2'>
              Preview
            </a>
          </div>
          {/* end::Toolbar */}
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
