import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact,showContact } from '../redux/actions/contactActions';

function Contact({contact}) {
  const dispatch = useDispatch();

  const handleEdit = ()=>{
      dispatch(showContact(contact._id));
      dispatch({type:"EDIT",payload:true});
      dispatch({type:"LOADING",payload:true})
  }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" />
  <Card.Body>
    <Card.Title style={{textAlign:"center",fontSize:"1.6em"}}>{contact.name}</Card.Title>
    <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
    <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id))} >Delete</Button>
    <Link to={`/updateContact/${contact._id}`} ><Button variant="primary" onClick={()=>handleEdit()}  >Edit</Button></Link>
    <Link to = {`/contacts/${contact._id}`} ><Button variant="primary" onClick={()=>dispatch(showContact(contact._id))}  >Details</Button></Link>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Contact
