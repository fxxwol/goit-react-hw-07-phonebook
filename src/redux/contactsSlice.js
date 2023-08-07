import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: []},
    reducers: {
        add({contacts}, { payload: { name, number } }) {
           contacts.push({
                id: nanoid(),
                name: name,
                number: number,
            })
        },
        remove({ contacts }, {payload: {id}}) {
            return { contacts: contacts.filter(contact => contact.id !== id) }
            
        }
    }
})

export const { add, remove } = contactsSlice.actions;