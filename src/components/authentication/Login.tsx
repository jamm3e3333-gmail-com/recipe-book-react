import React from 'react'
import { authLogin } from '../../store/storeSlices/authenticationSlice'
import { resetCredentials } from '../../store/storeSlices/userCredentialsSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import AuthForm from './AuthForm'
import useAuthenticatingState from '../../hooks/useAuthenticatingState'

const Login: FunComponent = () => {
    const {isAuthenticating, setIsAuthenticating} = useAuthenticatingState()
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector( state => state.userCredentialsReducer )

    const handleLoginOnSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !email || !password ) {
            return
        }

        setIsAuthenticating( true )
        setTimeout( async () => {
            await dispatch( authLogin( { email, password } ) )
            setIsAuthenticating( false )
        }, 1000 )
        dispatch(resetCredentials())
    }

    return (
        <AuthForm
            authName='login'
            handleAuthOnSubmitEvent={handleLoginOnSubmit}
            isAuthenticating={isAuthenticating}
            navigateToPath='signup'
            navigateToPathLinkName='Sign up'
        />
    )
}

export default Login
