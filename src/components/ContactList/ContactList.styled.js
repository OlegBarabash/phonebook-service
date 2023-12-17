import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #c9c9c9;
`;

export const List = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
