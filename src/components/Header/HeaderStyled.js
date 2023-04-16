import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 1;
  height: 100px;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(237, 255, 0);
  background: linear-gradient(
    8deg,
    rgba(237, 255, 0, 1) 23%,
    rgba(9, 9, 121, 1) 50%
  );
  box-shadow: 0px 1px 12px 1px rgba(0, 0, 0, 0.75);

  box-sizing: border-box;
`;

export const LogInfo = styled.p`
  color: rgba(237, 255, 0, 1);
  font-size: 26px;
`;

export const LogOutButton = styled.button`
  min-width: 80px;
  height: 30px;
  margin-left: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: rgba(9, 9, 121, 1);
  background-color: #ffc459;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 4px 0px 10px -2px rgba(0, 0, 0, 0.75);
  transition: all 250ms linear;

  &:hover {
    color: #e85d04;
    transform: scale(1.05);
  }
`;

export const Wrapp = styled.div`
  display: flex;
`;
