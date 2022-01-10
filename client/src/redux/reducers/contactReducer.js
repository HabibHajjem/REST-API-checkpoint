import {EDIT, GET_CONTACT, GET_CONTACTS, LOADING} from '../types/contactTypes'
const initialState = {
    contacts:[],
    contact:{},
    edit:false,
    loading:false
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_CONTACTS:
        return {...state, contacts:action.payload.contacts}
    case GET_CONTACT:
        return {...state, ...{contact:action.payload}}
    case EDIT :
        return {...state, edit:action.payload}
    case LOADING:
        return {...state, loading:action.payload}
    default:
        return state
    }
}

export default contactReducer;
