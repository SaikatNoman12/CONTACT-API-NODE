import asyncHandler from "express-async-handler";
import Contacts from "../models/contactModel.js";

/**
 * @des `get all contacts`
 * @route `get API api/contacts`
 * @access `public`
*/
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

/**
 * @des `create new contact`
 * @route `post API api/contacts`
 * @access `public`
*/
const createContact = asyncHandler( async (req, res) => {
    const {name ,email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are mandatory");    
    }
    else{
        const contact = await Contacts.create({
            name,
            email,
            phone
        })
        res.status(200).json(contact);
    }
});

/** 
 * @get `single contact`
 * @route `get API api/contacts/id`
 * @access `public`
*/
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    else{
        res.status(200).json(contact);
    }
});

/**
 * @des `update contact`
 * @route `put API api/contacts/id`
 * @access `public`
*/
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    else{   
        const updatedContact = await Contacts.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(updatedContact);
    }
  
});

/**
 * @des `delete contact`
 * @route `delete API api/contacts/id`
 * @access `public`
*/
const deleteContact =  asyncHandler(async(req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    else{
        console.log(req.params.id);
        await contact.deleteOne();
        res.status(200).json(contact);
    }
});


export { createContact, deleteContact, getAllContacts, getSingleContact, updateContact };

