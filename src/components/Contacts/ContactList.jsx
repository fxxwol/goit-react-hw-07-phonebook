import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';
import { fetchAllContacts } from 'redux/contacts/contactsThunk';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ).reverse();
  };
  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <Item key={contact.id} disableGutters>
            <ContactItem contactItem={contact} />
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
