const getAll = require("./getAll");
const { v4 } = require("uuid");
// const { nanoid }  = require("nanoid/non-secure");

const updateContacts = require("./updateContacts");


const add = async (name, email, phone) => {
    const contacts = await getAll();
    const newContact = {id: v4(), name, email, phone};
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
    
}

module.exports = add