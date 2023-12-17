import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LogOutStyledBtn, Text, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>{user.name}</Text>
      <LogOutStyledBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutStyledBtn>
    </Wrapper>
  );
};
