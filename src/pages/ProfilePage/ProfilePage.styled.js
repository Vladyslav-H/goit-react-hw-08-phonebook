import styled from 'styled-components';

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 150px 100px;
  box-sizing: border-box;
  background: linear-gradient(
    360deg,
    rgba(237, 255, 0, 0.5) 23%,
    rgba(9, 9, 121, 0.5) 50%
  );
`;

export const ProfileWrapp = styled.div`
  width: 400px;
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
