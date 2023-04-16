import styled from 'styled-components';

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgba(237, 255, 0, 0.3);
`;

export const ProfileWrapp = styled.div`
  width: 400px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const InfoStyled = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;
