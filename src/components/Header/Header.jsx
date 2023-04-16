import Navigation from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { LogInfo, HeaderStyled, LogOutButton,Wrapp } from './HeaderStyled';
import { logOut } from 'redux/auth/authOperation';
import { selectUserName,selectIsLogin } from 'redux/auth/authSelectors';

const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  const name = useSelector(selectUserName);

  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <Navigation />
      {isLogin ? (
        <Wrapp>
          <LogInfo>
            You you are logged in as{' '}
            <span style={{ fontWeight: 700,   textDecoration: 'underline' }}>{name}</span>
          </LogInfo>
          <LogOutButton onClick={() => dispatch(logOut())}>
            Log out
          </LogOutButton>
        </Wrapp>
      ) : (
        <LogInfo style={{ color: 'red' }}>Please login or register</LogInfo>
      )}
    </HeaderStyled>
  );
};

export default Header;
