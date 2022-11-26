const getAll = require("./getAll");
const updateContacts = require("./updateContacts")

const updateById = async (id,name, email, phone) => {
    const contacts = await getAll();  
    const idContact = contacts.findIndex(item => item.id === id);
    if (idContact === -1) {
        return null
    }
    contacts[idContact] = { name, email, phone, id }
    await updateContacts(contacts);
    return contacts[idContact];
}

module.exports = updateById;