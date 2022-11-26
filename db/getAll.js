const fs = require("fs/promises");
const pathToFile = require("./pathToFile");

const getAll = async() => {
    const data = await fs.readFile(pathToFile);
    const contacts = JSON.parse(data);
    return contacts
}
module.exports = getAll;