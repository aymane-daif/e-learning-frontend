import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../helpers/AssetHelpers';
const NotFound = () => {
  return (
    <div className='d-flex flex-column flex-root'>
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            '/media/illustrations/progress-hd.png'
          )}')`,
        }}>
        <div className='d-flex flex-column flex-column-fluid text-center p-10 py-lg-20'>
          <div className='pt-lg-10 mb-10'>
            <h1 className='fw-bolder fs-4x text-gray-700 mb-10'>
              Page Not Found
            </h1>

            <div className='fw-bold fs-3 text-gray-400 mb-15'>
              The page you looked not found!
            </div>
            <div className='text-center'>
              <Link to='/' className='btn btn-lg btn-primary fw-bolder'>
                Go to homepage
              </Link>
            </div>
          </div>
          <div
            className='
          d-flex
          flex-row-auto
          bgi-no-repeat
          bgi-position-x-center
          bgi-size-contain
          bgi-position-y-bottom
          min-h-100px min-h-lg-350px
        '
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                '/media/illustrations/sketchy-1/17.png'
              )}')`,
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
