import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
`;

export const MainLink = styled(NavLink)`
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #03045e;
  font-size: 24px;
  font-weight: 500;
  transition: all 250ms linear;

  &:hover {
    color: #e85d04;
    scale: 1.1;
  }

  &:not(:first-child) {
    margin-left: 15px;
  }
`;
