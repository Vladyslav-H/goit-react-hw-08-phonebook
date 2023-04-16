import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const ContactContainer = styled.div`
  min-width: 400px;
  max-height: 350px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(224, 162, 25, 0.7);
  border-radius: 10px;
  overflow: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    /* border-radius: 15px; */
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(224, 162, 25);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
