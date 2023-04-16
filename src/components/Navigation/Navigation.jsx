import { useSelector } from 'react-redux';
import { NavContainer, MainLink } from './NavigationStytled';
import { selectIsLogin } from 'redux/auth/authSelectors';


const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <NavContainer>
      {isLogin ? (
              <><MainLink to="/contacts">Contacts</MainLink>
              <MainLink to="/profile">Profile</MainLink></>
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
