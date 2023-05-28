import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL =
//     'https://6472251b6a9370d5a41b1538.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (error) {
            return error;
        }
    }
);