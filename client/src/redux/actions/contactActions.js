import axios from 'axios'
import { GET_CONTACTS } from '../types/contactTypes';

export const getContacts = () => async(dispatch) =>{
    try {
        const res = await axios.get('/contacts');
        dispatch({type:GET_CONTACTS,payload:res.data});
    } catch (error) {
        console.log(error);
    }
}

export const addContact = (newContact,navigate) => async(dispatch) =>{
    try {
        await axios.post('/contacts/addContact',newContact);
        dispatch(getContacts());
        navigate('/contacts');
    } catch (error) {
        console.log(error);
    }
}

export const deleteContact = (id) => async(dispatch) =>{
    try {
        await axios.delete(`/contacts/deleteContact/${id}`);
        dispatch(getContacts());
    } catch (error) {
        console.log(error);
    }
}

export const showContact = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`/contacts/${id}`);
        dispatch({type:"GET_CONTACT",payload:res.data})
        dispatch({type:"LOADING",payload:false});
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (update,id,navigate) => async(dispatch) => {
    try {
        await axios.put(`/contacts/updateContact/${id}`,update);
        dispatch(getContacts());
        navigate('/contacts');
    } catch (error) {
        console.log(error);
    }
}

