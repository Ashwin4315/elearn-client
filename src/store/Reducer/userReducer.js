import { createSlice } from '@reduxjs/toolkit'
import { forgotPassword, login, resetPassword, signup, update } from '../Action/authAction'
import { profile } from '../Action/userAction'

const initialState = {
  user: {},
  loading: false

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })

      .addCase(login.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
      .addCase(signup.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.loading = false
      })
      .addCase(signup.pending, (state) => {
        state.loading = true
      })

      .addCase(signup.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.loading = false
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true
      })

      .addCase(forgotPassword.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.loading = false
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true
      })

      .addCase(resetPassword.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
      .addCase(update.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.loading = false
      })
      .addCase(update.pending, (state) => {
        state.loading = true
      })

      .addCase(update.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
      .addCase(profile.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.loading = false
      })
      .addCase(profile.pending, (state) => {
        state.loading = true
      })

      .addCase(profile.rejected, (state, action) => {
        console.log(action);
        state.loading = false

      })
   
      

  }

})

export default userSlice.reducer