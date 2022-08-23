import { configureStore, createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    remuveContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, remuveContact } = myValueSlice.actions;

export const store = configureStore({
  reducer: {
    items: myValueSlice.reducer,
  },
});
