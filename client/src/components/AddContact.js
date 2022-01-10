import React, { useEffect, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { addContact, editContact } from '../redux/actions/contactActions';
import { useNavigate} from 'react-router-dom'

function AddContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const edit = useSelector(state => state.contactReducer.edit)
    const contact = useSelector(state => state.contactReducer.contact)
    const loading = useSelector(state => state.contactReducer.loading)

    const handleSubmit = () =>{
        if (edit) {
            dispatch(editContact({name,email,age},contact._id,navigate));
        } else {
            dispatch(addContact({name,email,age},navigate));
        }
    }

    useEffect(() => {
        if(edit){
            setName(contact.name)
            setEmail(contact.email)
            setAge(contact.age)
        }
        
    }, [contact.name])

    return (
        <div style={{width:"70%",margin:"auto",marginTop:"50px"}} >
            {loading?<h1>loading....</h1>:
<Form>
<Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="string" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
</Form.Group>          
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
</Form.Group>
<Form.Group className="mb-3">
    <Form.Label>Age</Form.Label>
    <Form.Control type='number' placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)} />
</Form.Group>
<Button variant="primary" type="submit" onClick={(e)=>{e.preventDefault();handleSubmit();}}>
    Submit
</Button>
</Form>}
        </div>
    )
}

export default AddContact
