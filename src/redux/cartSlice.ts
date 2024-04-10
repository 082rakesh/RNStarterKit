import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Info} from '../model/MenuCard';

interface CartData {
  items: Info[];
}
const initialState: CartData = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Info>) => {
      state.items.push(action.payload);
    },
    removeItem: state => {
      state.items.pop();
    },
    clearCart: state => {
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
