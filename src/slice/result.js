import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],

};

export const result = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { addResult } = result.actions;
export default result.reducer;
