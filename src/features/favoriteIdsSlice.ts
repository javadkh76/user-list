import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavorite } from '@/services/types';

interface FavoriteIdsState {
  [index: number]: IFavorite;
}

const initialState: FavoriteIdsState = {};

const favoriteIdsSlice = createSlice({
  name: 'favoriteIds',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IFavorite>) => {
      state[action.payload.userId] = action.payload;
    },
    remove: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const { add, remove } = favoriteIdsSlice.actions;
export default favoriteIdsSlice.reducer;
