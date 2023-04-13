import { useSelector } from 'react-redux';
import { NavContainer, MainLink } from './NavigationStytled';

// const { Link } = require("react-router-dom")

const Navigation = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <NavContainer>
      {isLogin ? (
        <MainLink to="/contacts">Contacts</MainLink>
      ) : (
        <>
          <MainLink to="/register">Register</MainLink>
          <MainLink to="/login">Login</MainLink>
        </>
      )}
    </NavContainer>
  );
};

export default Navigation;
