import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../const';

const initialState = {
    category: [],
    error: '',
    activeCategory: 0, //indexCategory
};

export const categoryRequestAsync = createAsyncThunk(
  'category/fetch', () => {
    return fetch(`${API_URI}${POSTFIX}/category`)
    .then(req => req.json())
    .catch(error => ({error}))
  }
)


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      //actions
      changeCategory(state, action) {
        state.activeCategory = action.payload.indexCategory;
      }
    },
    //authomatic actions
    extraReducers: {
      [categoryRequestAsync.pending.type]: (state) => {
        state.error = '';
      },
      [categoryRequestAsync.fulfilled.type]: (state, action) => {
        state.error = '';
        state.category = action.payload;
      },
      [categoryRequestAsync.rejected.type]: (state, action) => {
        state.error = action.payload.error;
      }
    }
});

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer;