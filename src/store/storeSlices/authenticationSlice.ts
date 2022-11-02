import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserCredentials } from './userCredentialsSlice'

export interface AuthenticationState {
    username?: string
    userId?: string
    accessToken?: string
    refreshToken?: string
}

const initialState: AuthenticationState = {}

export const authLogin = createAsyncThunk<
  // Return type of the payload creator
  AuthenticationState,
  // First argument to the payload creator
  UserCredentials,
  // Types for ThunkAPI
  {
    rejectValue: 'rejected'
  }
>('session[:]login', async (user, thunkApi) => {
    try {
        return {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            userId: 'userId',
            username: user.email,
            email: user.email,
        }
    } catch (error) {
        return thunkApi.rejectWithValue('rejected')
    }
})

export const authSignUp = createAsyncThunk<
  // Return type of the payload creator
  AuthenticationState,
  // First argument to the payload creator
  UserCredentials,
  // Types for ThunkAPI
  {
    rejectValue: 'rejected'
  }
>('session[:]signUp', async (user, thunkApi) => {
    try {
        return {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            userId: 'userId',
            username: user.email,
            email: user.email,
        }
    } catch (error) {
        return thunkApi.rejectWithValue('rejected')
    }
})

const authenticationSlice = createSlice({
    initialState,
    name: 'authentication',
    reducers: {
        logout: (state) => {
            for (const key in state) {
                state[key as keyof AuthenticationState] = undefined
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.fulfilled, (state, { payload}) => state = payload)
        builder.addCase(authLogin.rejected, (state) => state)
        builder.addCase(authSignUp.fulfilled, (state, {payload}) => state = payload)
        builder.addCase(authSignUp.rejected, (state) => state)
    }
})

export const { logout } = authenticationSlice.actions

export default authenticationSlice.reducer