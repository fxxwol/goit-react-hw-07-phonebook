import axios from 'axios';

axios.defaults.baseURL = 'https://64d127ffff953154bb7a10a1.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function addContact(newContact) {
    const response = await axios.post('/contacts', newContact)
    return response;

}

export async function deleteContact(id) {
    const response = axios.delete(`/contacts/${id}`)
    return response;
}