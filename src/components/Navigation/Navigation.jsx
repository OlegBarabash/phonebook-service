import { useAuth } from 'hooks';
import { Navi, NaviLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Navi>
      <NaviLink to="/">Home</NaviLink>
      {isLoggedIn && <NaviLink to="/contacts">Contacts</NaviLink>}
    </Navi>
  );
};
