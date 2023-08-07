import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'service/contactsAPI';

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactsAPI.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, { rejectWithValue }) => {
        try {
            const { data } = await contactsAPI.addContact(newContact);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, { rejectWithValue }) => {
        try {
            const { data: { id } } = await contactsAPI.deleteContact(contactId);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)