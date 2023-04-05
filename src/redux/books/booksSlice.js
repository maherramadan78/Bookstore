import { createSlice } from '@reduxjs/toolkit';

const initialState = [

  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.push({
        name: payload.name,
        author: payload.author,
        id: payload.id,
      });
    },
    removeBook: (state, { payload }) => {
      const index = state.findIndex((state) => state.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
