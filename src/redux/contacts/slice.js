import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacs",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.loading = false;
        }
      })
      .addCase(editContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(logout.fulfilled, (state) => {
        (state.items = []), (state.error = false), (state.loading = false);
      }),
});

export const contactsReducer = contactsSlice.reducer;
