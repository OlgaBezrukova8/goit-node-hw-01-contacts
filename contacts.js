const uuid = require("uuid");

const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db", "contacts.json");

const getContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseData = JSON.parse(data);
    return parseData;
  } catch (error) {
    console.log(error);
  }
};

const listContacts = async () => {
  try {
    console.table(await getContacts());
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const parseData = await getContacts();
    const contact = parseData.filter((el) => el.id === contactId);
    console.table(contact);
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const parseData = await getContacts();
    const contacts = parseData.filter((el) => el.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const parseData = await getContacts();
    parseData.push({ id: uuid.v1(), name, email, phone });
    await fs.writeFile(contactsPath, JSON.stringify(parseData, null, 2));
    console.table(parseData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
