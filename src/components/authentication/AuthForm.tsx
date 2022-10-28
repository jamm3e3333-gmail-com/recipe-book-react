import Container from '../UI/Container'
import classes from './AuthForm.module.scss'
import Button from '../UI/Button'
import Loader from '../UI/Loader'
import { useAppSelector, useAppDispatch } from '../../store'
import { authUser, UserCredentials } from '../../store/storeSlices/authenticationSlice'
import Input from '../UI/Input'
import { Link } from 'react-router-dom'

const AuthForm: React.FC<{
    authName: string
    isAuthenticating: boolean
    navigateToPath: 'login' | 'signup'
    navigateToPathLinkName: 'Login' | 'Sign up'
    handleAuthEvent: ( e: React.FormEvent<HTMLFormElement> ) => Promise<void>
}> = ( props ) => {
    const dispath = useAppDispatch()
    const {email, password, accessToken} = useAppSelector( state => state.authReducer )
    const isButtonDisabled = props.isAuthenticating || !!accessToken || !email || !password

    const setCredentialsFromInput = ( e: React.ChangeEvent<HTMLInputElement>, stateKey: keyof UserCredentials ) =>
        dispath(authUser({[ stateKey ]: e.target.value ?? ''}))

    const handleInputEmail = ( e: React.ChangeEvent<HTMLInputElement> ) =>
        setCredentialsFromInput( e, 'email' )

    const handleInputPassword = ( e: React.ChangeEvent<HTMLInputElement> ) =>
        setCredentialsFromInput( e, 'password' )

    return (
        <div className={classes[ 'auth-container' ]}>
            <Container>
                <form action='' onSubmit={props.handleAuthEvent} className={classes[ 'auth-form' ]}>
                    <label htmlFor='email'>Email: </label>
                    <Input
                        placeholder='Email...'
                        onChange={handleInputEmail}
                        name='Email'
                        value={email ?? ''}
                    />
                    <label htmlFor='password'>Password: </label>
                    <Input
                        placeholder='Password...'
                        type='password'
                        onChange={handleInputPassword}
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
