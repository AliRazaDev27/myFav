import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const initialState = {
  user: null,
  status: 'idle',
  error: null,
}

export const login = createAsyncThunk('auth/login', async (inputValues, thunkAPI) => {
  console.log("authslice")
  try {
    const response = await authService.loginUser(inputValues)
    return response
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading',
          state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'success',
          state.user = action.payload
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed',
          state.user = null,
          state.error = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions

export default authSlice.reducer
