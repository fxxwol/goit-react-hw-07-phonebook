import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteBtn, Text } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsThunk';

const ContactItem = ({ contactItem: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
