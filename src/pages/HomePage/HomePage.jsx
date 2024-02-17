import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthUserData } from '../../redux';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUserData);
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        {isLoggedIn ? (
          <h2 className={css.heroTitle}>
            Welcome to the
            <br /> Phonebook,{' '}
            <span
              style={{
                color: 'rgb(2, 4, 105)',
              }}
            >
              {user?.name}
            </span>
            !
          </h2>
        ) : (
          <h2 className={css.heroTitle}>
            Create your personal
            <br /> Phonebook!
          </h2>
        )}
      </div>
    </section>
  );
};
export default HomePage;
