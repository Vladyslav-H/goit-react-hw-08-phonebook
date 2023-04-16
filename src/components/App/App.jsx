import { Navigate, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import { fetchCurrerntUser } from 'redux/auth/authOperation';

import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

import PrivatRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
const LogPage = lazy(() => import('../../pages/LogPage/LogPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCurrerntUser());
  }, [dispath]);

  return (
    <>
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route
            path="/contacts"
            element={<PrivatRoute component={<ContactsPage />} />}
          />
          <Route
            path="/profile"
            element={<PrivatRoute component={<ProfilePage />} />}
          />

          <Route
            path="/register"
            element={<PublicRoute component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={<LogPage />} />}
          />
          <Route path="/" element={<PublicRoute component={<HomePage />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
