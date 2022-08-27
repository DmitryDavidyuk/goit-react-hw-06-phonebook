import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
