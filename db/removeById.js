const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
const contacts = await getAll();  
    const idContact = contacts.findIndex(item => item.id === id);
    if (idContact === -1) {
        return null
    }
    const [removeContact] = contacts.splice(idContact, 1)
    await updateContacts(contacts);
    return removeContact;
};
module.exports = removeById;