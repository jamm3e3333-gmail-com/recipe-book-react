import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface UserCredentials {
    email?: string
    password?: string
}

const initialState: UserCredentials = {
    email: '',
    password: '',
}

const userCredentialsSlice = createSlice({
    initialState,
    name: 'userCredentials',
    reducers: {
        setEmail: (state, { payload }: PayloadAction<UserCredentials>) => {
            state.email = payload.email
        },
        setPassword: (state, { payload }: PayloadAction<UserCredentials>) => {
            state.password = payload.password
        },
        resetCredentials: (state) => {
            for (const key in state) {
                state[key as keyof UserCredentials] = ''
            }
        }
    }
})

export const { resetCredentials, setEmail, setPassword } = userCredentialsSlice.actions

export default userCredentialsSlice.reducer