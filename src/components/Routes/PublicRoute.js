import { Navigate } from 'react-router-dom';

const { useSelector } = require('react-redux');
const { selectIsLogin } = require('redux/auth/authSelectors');

const PublicRoute = ({ component, redirectTo = '/contacts' }) => {
  const isLogin = useSelector(selectIsLogin);

  return !isLogin ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
