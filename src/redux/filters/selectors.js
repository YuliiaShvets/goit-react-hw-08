import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, filter) => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
);
