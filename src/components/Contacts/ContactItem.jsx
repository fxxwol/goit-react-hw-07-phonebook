import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, Text } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsThunk';
import SyncLoader from 'react-spinners/SyncLoader';

const ContactItem = ({ contactItem: { id, name, number } }) => {
  const { isDeleting, deletingId } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      {deletingId === id && (
        <SyncLoader
          color={'#1976d2'}
          size={8}
          speedMultiplier={0.8}
          loading={isDeleting}
          cssOverride={{ marginRight: '15px' }}
        />
      )}
      {!(deletingId === id) && (
        <DeleteBtn
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </DeleteBtn>
      )}
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
