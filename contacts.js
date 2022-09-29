const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const result = await fs.readFile(contactsPath, "utf-8");
  console.log(result);
};

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (name, email, phone) => {
    const data = await fs.appendFile(contactsPath, { name, email, phone });
    console.log(data)
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
