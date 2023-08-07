import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter)

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {filterContacts().map(contact => (
        <Item key={contact.id} disableGutters>
          <ContactItem contactItem={contact} />
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
