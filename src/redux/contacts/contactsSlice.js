import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContacts, addContact, deleteContact } from "./contactsThunk";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    contacts: [...payload],
                    isLoading: false
                }

            })
            .addCase(fetchAllContacts.pending, (state, _) => {
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            })
            .addCase(fetchAllContacts.rejected, (state, { payload }) => {
                return {
                    ...state,
                    isLoading: false,
                    error: payload
                }
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    contacts: [...state.contacts, payload]
                }

            })
            .addCase(addContact.pending, (state, _) => {
                return {
                    ...state,
                    error: null
                }
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    contacts: state.contacts.filter(({ id }) => id !== payload),

                }

            })
            .addCase(deleteContact.pending, (state, _) => {
                return {
                    ...state,
                    error: null
                }
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
    }
})

export const { add, remove } = contactsSlice.actions;