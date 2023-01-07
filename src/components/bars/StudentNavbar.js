import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../style/studentNavbar.css';

function StudentNavbar() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  function toggleNavBarVisiblity() {
    setNavIsVisible((previousState) => !previousState);
  }

  return (
    <>
      <div className='place-holder'></div>
      <nav
        className='d-flex justify-content-around 
      align-items-center py-2 border-bottom border-3 navbar-shadow bg-white col-12'>
        <ul className='list-container my-0'>
          <li className='list-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='list-item'>Profile</li>
          <li className='list-item'>Courses</li>
          <li className='list-item'>Certifications</li>
        </ul>

        {/* <div className="d-flex justify-content-end">
          <img className="user-image" onClick={()=>toggleNavBarVisiblity()} src={"https://avatars.dicebear.com/api/adventurer/aa.svg"} />
          
          <div className={"hidden-nav px-3"+(navIsVisible?" visible-nav":"")}>

            <div className="d-flex justify-content-center
            align-items-center pb-3 border-bottom">
                <img className="user-image" src={"https://avatars.dicebear.com/api/adventurer/aa.svg"} />
                <div className="ms-3">
                  <div className="username">abdelali el hammadi</div>
                  <div className="mt-1 email">a@gmail.com</div>
                </div>
            </div>

            <ul className="mt-3 list-container flex-column pb-3
            border-bottom">
              <li className="list-item-hidden">Home</li>
              <li className="list-item-hidden">My Profile</li>
              <li className="list-item-hidden">My Courses</li>
              <li className="list-item-hidden">My Certifications</li>
            </ul>

            <div className="list-item-hidden mt-3">Sign out</div>

          </div>
        </div> */}
      </nav>
    </>
  );
}

export default StudentNavbar;
