import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteIdsState {
  [index: number]: boolean;
}

const initialState: FavoriteIdsState = {};

const favoriteIdsSlice = createSlice({
  name: 'favoriteIds',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state[action.payload] = true;
    },
    remove: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const { add, remove } = favoriteIdsSlice.actions;
export default favoriteIdsSlice.reducer;
