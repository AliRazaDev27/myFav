import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null

const initialState = {
  user: user,
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
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  console.log("logout")
  try {
    const response = await authService.logoutUser()
    return response
  } catch (error) {
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
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed',
          state.user = null,
          state.error = action.payload
      })

    builder.addCase(logout.pending, (state) => {
      state.status = "loading",
        state.error = null
    })
      .addCase(logout.fulfilled, (state) => {
        state.user = null,
          state.status = "success",
          state.error = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed",
          state.error = action.payload
      })

  }
})

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions

export default authSlice.reducer
