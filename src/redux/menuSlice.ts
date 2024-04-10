import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Card4} from '../model/MenuCard';
import {APIStatus} from '../utils/Enums';
import {fetchMenuList} from './restaurantsService';

type MenuData = {
  cards: Card4[];
  status: APIStatus;
  error: string;
};

const initialState: MenuData = {
  cards: [],
  status: APIStatus.LOADING,
  error: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenuList.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(fetchMenuList.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = APIStatus.SUCCESS;
        state.cards = state.cards.concat(action.payload);
      })
      .addCase(fetchMenuList.rejected, state => {
        state.status = APIStatus.REJECTED;
      });
  },
});

export default menuSlice.reducer;
