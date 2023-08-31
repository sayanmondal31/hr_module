import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffs: [],
  pagination: {
    take: 25,
    currentPage: 1,
  },
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    getAllStaffs: (state, action) => {
      state.staffs = action.payload.staffs;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { getAllStaffs, setPagination } = staffSlice.actions;
export const staffSliceReducer = staffSlice.reducer;
