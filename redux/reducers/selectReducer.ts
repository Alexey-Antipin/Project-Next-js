import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectState = {
  priceMin: string;
  priceMax: string;
  rooms: number;
  city: number;
};

const initialState: SelectState = {
  priceMin: "",
  priceMax: "",
  rooms: 0,
  city: 0,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<number>) {
      state.city = action.payload;
    },
    selectCountRooms(state, action: PayloadAction<number>) {
      state.rooms = action.payload;
    },
    selectPriceMin(state, action: PayloadAction<string>) {
      state.priceMin = action.payload;
    },
    selectPriceMax(state, action: PayloadAction<string>) {
      state.priceMax = action.payload;
    },
    defaultPrice(state) {
      state.priceMax = "10000";
      state.priceMin = "0";
      state.rooms = 0;
    },
  },
});

export const {
  selectCity,
  selectCountRooms,
  selectPriceMin,
  selectPriceMax,
  defaultPrice,
} = selectSlice.actions;

export default selectSlice.reducer;
