import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #f9f9f9;
  padding: 25px;
  margin: 50px auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const LoaderContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.h1`
  color: green;
  font-weight: 500;
  font-size: 28px;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
`;
