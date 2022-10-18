const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

const updateContacts = async (contactList) =>
  fs.writeFile(contactsPath, contactList);

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((el) => el.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const indexContact = await contacts.findIndex((el) => el.id === contactId);
  if (indexContact === -1) {
    return null;
  }
  const result = contacts.splice(indexContact, 1);
  await updateContacts(JSON.stringify(contacts));
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  const contactList = JSON.stringify([...contacts, newContact], null, 2);
  await updateContacts(contactList);
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
