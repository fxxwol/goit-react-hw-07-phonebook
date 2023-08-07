import { Container } from '@mui/material';
import ContactForm from './ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter';

function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
      />
      <ContactList />
    </Container>
  );
}

export default App;
