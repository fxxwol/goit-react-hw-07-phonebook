import React from 'react';
import PropTypes from 'prop-types';
import { Text, DeleteBtn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

const ContactItem = ({ contactItem: { id, name, number } }) => {
   const dispatch = useDispatch();
  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={ () => dispatch(remove({id}))}>
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
  })
};

export default ContactItem;
