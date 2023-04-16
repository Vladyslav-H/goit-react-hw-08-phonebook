import { Navigate } from 'react-router-dom';

const { useSelector } = require('react-redux');
const { selectIsLogin } = require('redux/auth/authSelectors');

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
