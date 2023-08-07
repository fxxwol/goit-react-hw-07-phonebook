import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from './contacts/contactsSlice'
import { filterSlice } from './filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    }
})