import { createSelector } from "@reduxjs/toolkit";
import { selectSearchQuery } from "../filter/selectors";

export const selectContacts = (state) => state.contacts;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (contacts, filters) => {
    return contacts.items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filters.name.toLowerCase()) ||
        contact.number.includes(filters.name.toLowerCase())
    );
  }
);
