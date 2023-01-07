import React from 'react';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Payment({ course }) {
  const dispatch = useDispatch();

  return (
    <div className='rightContent d-flex justify-content-lg-center col'>
      <div
        className='payment p-0 pb-8 col-sm-12 col-md-12 col-lg-8 
            col-xl-7 d-flex flex-column  bg-white'>
        <img className='c-image p-0 m-0 col-12' src='/img-16.jpg' />
        <div className='c-details-container'>
          <h1 className='c-price'>${course?.price}</h1>
          <Link to={'/cart'}>
            <button
              type='button'
              className='btn btn-primary
                         my-button col-12 mt-5'
              onClick={() => {
                dispatch(cartActions.addCourseToCart(course));
              }}>
              Add to Cart
            </button>
          </Link>
          <div className='mt-5 d-flex'>
            <AllInclusiveIcon />
            <div className='ms-4'>Full lifetime access</div>
          </div>
          <div className='mt-5 d-flex'>
            <DevicesIcon />
            <div className='ms-4'>Access on mobile and TV</div>
          </div>
          <div className='mt-5 d-flex'>
            <EmojiEventsIcon />
            <div className='ms-4'>Certificate of completion</div>
          </div>
        </div>
      </div>
    </div>
  );
}
