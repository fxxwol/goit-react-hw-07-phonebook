import { FormControl, Input, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Form, SubmitBtn } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsThunk';
import { SyncLoader } from 'react-spinners';

function ContactForm() {
  const {contacts, isAdding} = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const validate = ({ name, number }) => {
    const errors = {};
    if (
      !/^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name)
    ) {
      errors.name = 'Invalid name';
    }
    if (
      !/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
        number
      )
    ) {
      errors.number = 'Invalid number';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validate: validate,
    onSubmit: ({ name, number }) => {
      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in your contacts`);
        return;
      }
      dispatch(addContact({ name, number }));
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          size="small"
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="number">Number</InputLabel>
        <Input
          id="number"
          type="tel"
          name="number"
          value={formik.values.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          error={formik.touched.number && Boolean(formik.errors.number)}
          onChange={formik.handleChange}
        />
      </FormControl>
      <SyncLoader
        color={'#1976d2'}
        size={8}
        speedMultiplier={0.8}
        loading={isAdding}
        cssOverride={{marginLeft: '30px'}}
      />
      {!isAdding &&  (
        <SubmitBtn type="submit" disabled={isAdding}>
          Add contact
        </SubmitBtn>
      )}
    </Form>
  );
}

export default ContactForm;
