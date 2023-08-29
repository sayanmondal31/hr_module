import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffs: [],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    getAllStaffs: (state, action) => {
      state.staffs = action.payload.staffs;
    },
  },
});

export const { getAllStaffs } = staffSlice.actions;
export const staffSliceReducer = staffSlice.reducer;
