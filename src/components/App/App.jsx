import { Navigate, Routes, Route } from 'react-router-dom';

// import ContactList from '../ContactList/ContactList';
// import { Form } from '../Form/Form';
// import Filter from 'components/Filter/Filter';
import { Header } from './App.styled';

import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Navigation from '../Navigation/Navigation';
import LogPage from '../../pages/LogPage/LogPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import HomePage from 'pages/HomePage/HomePage';

import { useSelector } from 'react-redux';

export const App = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {isLogin ? (
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
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

      {/* <Container>
      <Title>Phonebook</Title>
      <Form />

      <ContactContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactContainer>
    </Container>
  */}
    </>
  );
};
