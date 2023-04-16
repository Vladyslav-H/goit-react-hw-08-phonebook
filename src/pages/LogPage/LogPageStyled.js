import styled from 'styled-components';

export const FormLogin = styled.form`
  width: 250px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  background-color: rgba(121, 199, 83, 0.8);
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputStyled = styled.input`
  width: 200px;
  height: 25px;

  background-color: #f1da8d;

  &:focus {
    background-color: #e4ecfc;
  }
`;

export const ButtonStyled = styled.button`
  min-width: 150px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #ffc459;
  background-color: #008630;
  font-size: 18px;
  box-shadow: 4px 0px 10px -2px rgba(0, 0, 0, 0.75);
  transition: all 250ms linear;

  &:hover {
    color: #008630;
    background-color: #ffc459;
    transform: scale(1.05);
  }
`;
