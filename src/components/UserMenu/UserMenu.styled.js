import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LogOutStyledBtn = styled.button`
  cursor: pointer;
  height: 30px;
  border: none;
  background: #4caf50;
  color: #fff;
  font-size: 15px;
`;

export const Text = styled.p`
  font-size: 18px;
  max-width: 140px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
