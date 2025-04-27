import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading : false
  },
  reducers:{
    setloading:(state, action) => {
        state.loading = action.payload;

    },
    setAuthUser:(state,action) => {
        state.user = action.payload; state.isAuthenticated = true; state.loading = false;
    }
  }
})
export const { setloading, setAuthUser } = authSlice.actions;
export default authSlice.reducer;