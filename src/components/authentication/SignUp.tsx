import React, { useState } from 'react'
import { authSignUp } from '../../store/storeSlices/authenticationSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import AuthForm from './AuthForm'


const SignUp: React.FC = () => {
    const [ isSigninUpState, setIsSigningUpState ] = useState<boolean>( false )
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector( state => state.authReducer )

    const handleSignUp = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !email || !password ) {
            return
        }

        setIsSigningUpState( true )
        setTimeout( async () => {
            await dispatch( authSignUp( { email, password } ) )
            setIsSigningUpState( false )
        }, 1000 )
    }

    return (
        <AuthForm authName='sign up' handleAuthEvent={handleSignUp} isAuthenticating={isSigninUpState} />
    )
}

export default SignUp
