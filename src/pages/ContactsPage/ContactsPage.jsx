import { Container, ContactContainer } from './ContactsPageStyled';
import { Form } from 'components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <Container>
      <Form />
      <ContactContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactContainer>
    </Container>
  );
};

export default ContactsPage;
