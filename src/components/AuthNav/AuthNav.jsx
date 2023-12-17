import { Navi, NaviLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navi>
      <NaviLink to="/register">Register</NaviLink>
      <NaviLink to="/login">Log In</NaviLink>
    </Navi>
  );
};
