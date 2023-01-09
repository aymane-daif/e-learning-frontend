import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../../style/studentNavbar.css';

function StudentNavbar() {
  const { keycloak } = useKeycloak();

  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.cart.courses);

  const [navIsVisible, setNavIsVisible] = useState(false);

  function toggleNavBarVisibility() {
    setNavIsVisible((previousState) => !previousState);
  }

  return (
    <>
      <Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
        <Container>
          <Nav className='me-auto'>
            <NavLink
              exact
              to='/'
              className={({ isActive }) =>
                isActive ? 'list-item nav-link' : 'nav-link'
              }>
              Home
            </NavLink>
            <NavLink
              exact
              to='/profile/courses'
              className={({ isActive }) =>
                isActive ? 'list-item nav-link' : 'nav-link'
              }>
              Profile
            </NavLink>
            <NavLink
              exact
              to='/profile/courses'
              className={({ isActive }) =>
                isActive ? 'list-item nav-link' : 'nav-link'
              }>
              Courses
            </NavLink>
          </Nav>
          <div className='d-flex justify-content-end'>
            <NavLink exact to='/cart'>
              <div className='cart'>
                <div className='total-courses'>{courses.length}</div>
                <ShoppingCartIcon
                  fontSize='large'
                  color='warning'
                  className='mt-4 me-5'
                />
              </div>
            </NavLink>
            <img
              className='user-image'
              onClick={() => toggleNavBarVisibility()}
              src={'https://avatars.dicebear.com/api/adventurer/aa.svg'}
              alt='avatar'
            />

            {navIsVisible && (
              <div
                className={
                  'hidden-nav px-3' + (navIsVisible ? ' visible-nav' : '')
                }>
                <div
                  className='d-flex justify-content-center
            align-items-center pb-3 border-bottom'>
                  <img
                    className='user-image'
                    src={'https://avatars.dicebear.com/api/adventurer/aa.svg'}
                    alt='avatar'
                  />
                  <div className='ms-3'>
                    <div className='username'>{user.nickname}</div>
                    <div className='mt-1 email'>{user.email}</div>
                  </div>
                </div>

                <ul
                  className='mt-3 list-container flex-column pb-3
            border-bottom'>
                  <NavLink
                    exact
                    to='/profile/settings'
                    className='list-item-hidden'>
                    Settings
                  </NavLink>
                  <NavLink
                    exact
                    to='/certifications'
                    className='list-item-hidden'>
                    My Certifications
                  </NavLink>
                </ul>

                <div
                  className='list-item-hidden mt-3'
                  onClick={() => {
                    keycloak.logout();
                  }}>
                  Sign out
                </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default StudentNavbar;
