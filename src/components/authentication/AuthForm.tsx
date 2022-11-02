import { Link, Navigate } from 'react-router-dom'
import React from 'react'
import { validateEmail, validatePassword } from '../../utils'
import useChangeInputEvent from '../../hooks/useInputChangeEvent'
import Container from '../UI/Container'
import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Input from '../UI/Input'
import { useAppSelector } from '../../store'
import { setEmail, setPassword, UserCredentials } from '../../store/storeSlices/userCredentialsSlice'
import classes from './AuthForm.module.scss'

const AuthForm: FunComponent<{
    authName: string
    isAuthenticating: boolean
    navigateToPath: 'login' | 'signup'
    navigateToPathLinkName: 'Login' | 'Sign up'
    handleAuthOnSubmitEvent: ( e: React.FormEvent<HTMLFormElement> ) => Promise<void> | void
}> = ( props ) => {
    const {
        handleChangeEvent: handleChangeEmailInput,
        isInputValueValid: isEmailValid
    } = useChangeInputEvent<Pick<UserCredentials, 'email'>>(validateEmail, {
        actionPayloadKeyName: 'email',
        storeAction: setEmail,
    })

    const {
        handleChangeEvent: handleChangePasswordInput,
        isInputValueValid: isPasswordValid
    } = useChangeInputEvent<Pick<UserCredentials, 'password'>>(validatePassword, {
        actionPayloadKeyName: 'password',
        storeAction: setPassword,
    })

    const {email, password} = useAppSelector( state => state.userCredentialsReducer )
    const {accessToken} = useAppSelector( state => state.authReducer )
    const isButtonDisabled = !isEmailValid || !isPasswordValid || props.isAuthenticating || !email || !password

    if (accessToken) {
        return <Navigate replace to='/' />
    }
    return (
        <div className={classes[ 'auth-container' ]}>
            <Container>
                <form action='' onSubmit={props.handleAuthOnSubmitEvent} className={classes[ 'auth-form' ]}>
                    <label htmlFor='email'>Email: </label>
                    <Input
                        isValid={isEmailValid}
                        placeholder='Email...'
                        onChange={handleChangeEmailInput}
                        name='email'
                        value={email ?? ''}
                    />
                    <label htmlFor='password'>Password: </label>
                    <Input
                        isValid={isPasswordValid}
                        placeholder='Password...'
                        type='password'
                        onChange={handleChangePasswordInput}
                        name='password'
                        value={password ?? ''}
                    />
                    <Button type='submit' name='login' disabled={isButtonDisabled}>{props.authName}</Button>
                </form>
            {props.isAuthenticating &&
                    <Loader />
            }
            </Container>
            <div className={classes['auth-links']}>
                <Link to={`/${props.navigateToPath}`}>{props.navigateToPathLinkName}</Link>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default AuthForm
