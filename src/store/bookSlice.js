import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://openlibrary.org/search.json?title=';

const initialState = {
  searchTerm: 'the lost world',
  books: [],
  loading: true,
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${URL}${initialState.searchTerm}`);

    const data = await response.json();

    return data.docs;
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        (state.loading = false), state.books.push(action.payload);
      })
      .addCase(fetchBooks.rejected, state => {
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
