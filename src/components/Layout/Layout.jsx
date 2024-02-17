import { useSelector } from 'react-redux';
import { Navigation, UserMenu } from 'components';
import { selectAuthIsLoggedIn } from '../../redux';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export function Layout() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <>
      <header>
        <div className={css.headerContainer}>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
