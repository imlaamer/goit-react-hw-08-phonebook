import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            Sign up
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}
    </>
  );
};
