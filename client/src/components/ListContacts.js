import React from 'react'
import {useSelector} from 'react-redux'
import Contact from './Contact'

function ListContacts() {
    const contacts = useSelector(state => state.contactReducer.contacts)
    return (
        <div style={{display:"flex",justifyContent:"left",gap:"30px",marginLeft:"100px",marginTop:"50px",flexWrap:"wrap"}}>
            {contacts.map(contact=><Contact key={contact._id} contact={contact}/>)}
        </div>
    )
}

export default ListContacts
