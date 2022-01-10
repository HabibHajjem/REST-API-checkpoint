const express = require('express');
const ContactSchema = require('../Models/ContactSchema');
const router = express.Router();
const mongoose = require('mongoose');

//Post method

router.post('/addContact', async(req,res)=>{
    try {
        const newContact = new ContactSchema(req.body);
        await newContact.save();
        res.send(newContact);
    } catch (error) {
        res.send("could not add");
    }
})

//Get method

router.get('/',async(req,res)=>{
    try {
        const contacts = await ContactSchema.find();
        res.send({contacts});
    } catch (error) {
        res.send("could not get list of contacts")
        
    }
})

router.get('/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const contact = await ContactSchema.findById(id);
        res.send(contact);
    } catch (error) {
        res.send("could not get contact by id");
    }
})

//Delete method

router.delete('/deleteContact/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const deletedContact = await ContactSchema.findByIdAndDelete(id);
        res.send(deletedContact);
    } catch (error) {
        res.send("could not delete contact");
    }
})

//Update method

router.put('/updateContact/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const contactUpdated = await ContactSchema.findByIdAndUpdate(id,req.body);
        res.send(contactUpdated);
    } catch (error) {
        res.send("could not update contact");
    }
})

module.exports = router;