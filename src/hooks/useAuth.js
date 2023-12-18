import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
  selectIsRegister,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authError = useSelector(selectAuthError);
  const isRegister = useSelector(selectIsRegister);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
    isRegister,
  };
};
