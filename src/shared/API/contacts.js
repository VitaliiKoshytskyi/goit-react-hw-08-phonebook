import authInstance from "./auth";

export const getAllContacts = () => authInstance.get("/contacts")

export const addContacts = (data) => authInstance.post("/contacts", data)

export const deleteContacts = (id) =>authInstance.delete(`/contacts/${id}`)