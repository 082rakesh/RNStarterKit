import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Restaurant} from '../model/Restaurants';
import {fetchRestaurants} from './restaurantsService';
import {APIStatus} from '../utils/Enums';
import {Logger} from '../utils/Logger';

type RestaurantsData = {
  restaurants: Restaurant[];
  status: APIStatus;
  error: null;
};

const initialState: RestaurantsData = {
  restaurants: [],
  status: APIStatus.LOADING,
  error: null,
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurants.pending, state => {
        state.status = APIStatus.LOADING;
        Logger.debug('fetch post LOADING state');
      })
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = APIStatus.SUCCESS;
          Logger.debug('fetch post SUCCESS state');
          state.restaurants = state.restaurants.concat(action.payload);
        },
      )
      .addCase(
        fetchRestaurants.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = APIStatus.REJECTED;
          state.error = action.payload.error.message;
        },
      );
  },
});

export default restaurantsSlice.reducer;
