const contactsOperations = require("./db")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "getAll":
            const contacts = await contactsOperations.getAll();
            console.log(contacts);
            break;
        case "getById":
            const contact = await contactsOperations.getById(id);
            if (!contact) {
                throw new Error(`Contact with id=${id} not found`)
            }
            console.log(contact);
            break;
        case "add":
            const newContact = await contactsOperations.add(name, email, phone);
            console.log(newContact);
            break;
        case "update":
            const updateContact = await contactsOperations.updateById(id, name, email, phone);
            if (!updateContact) {
                throw new Error(`Contact with id=${id} not found`)
            }
            console.log(updateContact);
            break;
        case "remove":
            const removeContact = await contactsOperations.removeById(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action!")
    }
}

  module.exports = invokeAction