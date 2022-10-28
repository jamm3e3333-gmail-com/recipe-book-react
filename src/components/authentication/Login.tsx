import React, { useState } from 'react'
import { authLogin } from '../../store/storeSlices/authenticationSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import AuthForm from './AuthForm'


const Login: React.FC = () => {
    const [ isLoggingState, setIsLoggingState ] = useState<boolean>( false )
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector( state => state.authReducer )

    const handleLogin = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !email || !password ) {
            return
        }

        setIsLoggingState( true )
        setTimeout( async () => {
            await dispatch( authLogin( { email, password } ) )
            setIsLoggingState( false )
        }, 1000 )
    }

    return (
        <AuthForm
            authName='login'
            handleAuthEvent={handleLogin}
            isAuthenticating={isLoggingState}
            navigateToPath='signup'
            navigateToPathLinkName='Sign up'
        />
    )
}

export default Login
