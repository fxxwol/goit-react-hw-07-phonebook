import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice(
    {
        name: 'filter',
        initialState: '',
        reducers: {
            change(_, {payload: {filterValue}}) {
                return filterValue
            }
        }
    }
)

export const {change} = filterSlice.actions