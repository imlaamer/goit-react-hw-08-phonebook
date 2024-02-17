import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux';

export function PrivateRoute({ children, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
}
