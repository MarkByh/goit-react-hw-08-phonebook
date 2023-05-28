import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const arrOperations = [register, logIn, logOut, refreshUser];
const func = (type) => arrOperations.map(el => el[type])


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleLogin)
      .addCase(logIn.fulfilled, handleLogin)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          ...func('pending')
        ), handlePending
      )
      .addMatcher(isAnyOf(
        ...func('rejected')
      ), handleRejected
      )



  },
});

export const authReducer = authSlice.reducer;
