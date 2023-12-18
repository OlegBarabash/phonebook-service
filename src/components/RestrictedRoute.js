import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo: redirect,
}) => {
  const { isLoggedIn, isRegister } = useAuth();

  return isLoggedIn || isRegister ? <Navigate to={redirect} /> : Component;
};
