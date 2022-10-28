import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthenticationState {
    username?: string
    userId?: string
    accessToken?: string
    refreshToken?: string
    email?: string,
    password?: string,
}

export type UserCredentials = Required<Pick<AuthenticationState, 'email' | 'password'>>

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

export const authenticationSlice = createSlice({
    initialState,
    name: 'authentication',
    reducers: {
        authUser: (userState, userPayload: PayloadAction<AuthenticationState>) => {
            const {email, password} = userPayload.payload
            if (email !== undefined) {
                userState.email = email
            }
            if (password !== undefined) {
                userState.password = password
            }
        },
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

export const { logout, authUser } = authenticationSlice.actions

export default authenticationSlice.reducer