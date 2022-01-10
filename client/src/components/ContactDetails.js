import React from 'react'
import {useSelector} from 'react-redux'
function ContactDetails() {
    const contact = useSelector(state => state.contactReducer.contact)
    return (
        <div style={{textAlign:"center",marginTop:"50px",fontSize:"1.7em"}}>
            <span style={{fontWeight:"bold"}} >Name:</span>{contact.name}<br/>
            <span style={{fontWeight:"bold"}} >Email:</span>{contact.email}<br/>
            <span style={{fontWeight:"bold"}}>Age:</span>{contact.age}
        </div>
    )
}

export default ContactDetails
