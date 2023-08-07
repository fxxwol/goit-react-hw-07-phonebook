import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContacts, addContact, deleteContact } from "./contactsThunk";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        isAdding: false,
        isDeleting: false,
        deletingId: null,
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
                    contacts: [...state.contacts, payload],
                    isAdding: false,
                }

            })
            .addCase(addContact.pending, (state, _) => {
                return {
                    ...state,
                    isAdding: true,
                    error: null
                }
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload,
                    isAdding: false,
                }
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    contacts: state.contacts.filter(({ id }) => id !== payload),
                    isDeleting: false,
                    deletingId: null
                }

            })
            .addCase(deleteContact.pending, (state, action) => {
                return {
                    ...state,
                    error: null,
                    isDeleting: true,
                    deletingId: action.meta.arg
                }
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload,
                    isDeleting: false,
                }
            })
    }
})

export const { add, remove } = contactsSlice.actions;