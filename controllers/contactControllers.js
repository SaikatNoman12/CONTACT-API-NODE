/**
 * @des `get all contacts`
 * @route `get API api/contacts`
 * @access `public`
*/
const getAllContacts = (req, res) => {
    res.status(200).json({msg:"Get all contacts"});
};

/**
 * @des `create new contact`
 * @route `post API api/contacts`
 * @access `public`
*/
const createContact = (req, res) => {
    const {name ,email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are mandatory");    
    }
    else{
        res.status(200).json({msg:"Create contact"})
        console.log("The request body is", req.body);
    }
};

/**
 * @des `update contact`
 * @route `put API api/contacts/id`
 * @access `public`
*/
const updateContact = (req, res) => {
    res.status(200).json({msg:`Update contact ${req.params.id}`});
};

/**
 * @des `delete contact`
 * @route `delete API api/contacts/id`
 * @access `public`
*/
const deleteContact = (req, res) => {
    res.status(200).json({msg:`Delete contact ${req.params.id}`});
};


export { createContact, deleteContact, getAllContacts, updateContact };

