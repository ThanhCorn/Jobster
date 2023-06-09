import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { IUser } from '../types/myTypes'
const initialState = {
  isLoading: false,
  user: null
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (user: IUser, thunkAPI) => {
    console.log(`register: ${JSON.stringify(user)}`)
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async (user: IUser, thunkAPI) => {
    console.log(`login: ${JSON.stringify(user)}`)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer
