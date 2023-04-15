import { Navigate, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import { fetchCurrerntUser } from 'redux/auth/authOperation';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

// import ContactList from '../ContactList/ContactList';
// import { Form } from '../Form/Form';
// import Filter from 'components/Filter/Filter';

// import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import LogPage from '../../pages/LogPage/LogPage';
// import RegisterPage from '../../pages/RegisterPage/RegisterPage';
// import HomePage from 'pages/HomePage/HomePage';
// import ProfilePage from 'pages/ProfilePage/ProfilePage';

const LogPage = lazy(() => import('../../pages/LogPage/LogPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCurrerntUser());
  }, [dispath]);

  return (
    <>
      <Header />
      <Suspense fallback={<p>loading</p>}>
        {isLogin ? (
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LogPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
};
