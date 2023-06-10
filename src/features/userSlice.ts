import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../types/myTypes'
import { toast } from 'react-toastify'

import customFetch from '../utils/axios'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage
} from '../utils/localStorage'
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (user: IUser, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user)
      return resp.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async (user: IUser, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user)
      return resp.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.type]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled.type]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome Back ${user.name}`)
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [registerUser.pending.type]: (state, action) => {
      state.isLoading = true
    },
    [registerUser.fulfilled.type]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome ${user.name}`)
    },
    [registerUser.rejected.type]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
      console.log(payload)
    }
  }
})

export default userSlice.reducer
