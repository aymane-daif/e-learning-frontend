import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  courses: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCourseToCart: (state, action) => {
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    },
    removeCourseFromCart: (state, action) => {
      return {
        ...state,
        courses: [
          ...state.courses.filter((course) => course.id !== action.payload),
        ],
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        course: [],
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
