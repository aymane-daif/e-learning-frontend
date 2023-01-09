import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../shared/helpers/AssetHelpers';

const CardCourse = ({
  image,
  badgeColor,
  courseLevel,
  statusColor,
  name,
  description,
  lastUpdated,
  instructor,
  progress,
  id,
}) => {
  return (
    <Link
      to={`/videos/${id}`}
      className='card border border-2 border-gray-300 border-hover'>
      <div className='card-header border-0 pt-9'>
        <div className='card-title m-0'>
          <div className='symbol symbol-50px w-50px bg-light'>
            <img src={toAbsoluteUrl(image)} alt='card2' className='p-3' />
          </div>
        </div>

        <div className='card-toolbar'>
          <span
            className={`badge badge-light-${badgeColor} fw-bolder me-auto px-4 py-3`}>
            {courseLevel}
          </span>
        </div>
      </div>

      <div className='card-body p-9'>
        <div className='fs-3 fw-bolder text-dark'>{name}</div>

        <p className='text-gray-400 fw-bold fs-5 mt-1 mb-7'>{description}</p>

        <div className='d-flex flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>
              {lastUpdated.split('T')[0]}
            </div>
            <div className='fw-bold text-gray-400'>Last updated</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>{instructor}</div>
            <div className='fw-bold text-gray-400'>Instructor</div>
          </div>
        </div>

        <div
          className='h-4px w-100 bg-light mb-5'
          data-bs-toggle='tooltip'
          title='This project completed'>
          <div
            className={`bg-${statusColor} rounded h-4px`}
            role='progressbar'
            style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </Link>
  );
};

export default CardCourse;
