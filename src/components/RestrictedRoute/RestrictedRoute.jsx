import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux';

export function RestrictedRoute({ children }) {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}
