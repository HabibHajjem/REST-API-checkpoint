import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { getContacts } from '../redux/actions/contactActions';

function NavBare() {
  const dispatch = useDispatch();
    return (
        <div >
            <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/' >Home</Nav.Link>
      <Nav.Link as={Link} to='/contacts' onClick={()=>dispatch(getContacts())} >Contatcts</Nav.Link>
      <Nav.Link as={Link} to='/addContact' onClick={()=>dispatch({type:"EDIT",payload:false})}>Add Contatct</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBare
