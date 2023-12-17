import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navi = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NaviLink = styled(NavLink)`
  font-weight: 500;
  &.active {
    color: green;
  }
  &:hover {
    text-decoration: underline;
  }
`;
