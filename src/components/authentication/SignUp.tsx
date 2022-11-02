import React from 'react'
import { authSignUp } from '../../store/storeSlices/authenticationSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import AuthForm from './AuthForm'
import useAuthenticatingState from '../../hooks/useAuthenticatingState'
import { resetCredentials } from '../../store/storeSlices/userCredentialsSlice'

const SignUp: FunComponent = () => {
    const {isAuthenticating, setIsAuthenticating} = useAuthenticatingState()
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector( state => state.userCredentialsReducer )

    const handleSignUpOnSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !email || !password ) {
            return
        }

        setIsAuthenticating(true)
        setTimeout( async () => {
            await dispatch( authSignUp( { email, password } ) )
            setIsAuthenticating(false)
        }, 1000 )
        dispatch(resetCredentials())
    }

    return (
        <AuthForm
            authName='sign up'
            handleAuthOnSubmitEvent={handleSignUpOnSubmit}
            isAuthenticating={isAuthenticating}
            navigateToPath='login'
            navigateToPathLinkName='Login'
        />
    )
}

export default SignUp
