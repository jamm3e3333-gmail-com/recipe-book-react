import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../store'
import { logout } from '../../store/storeSlices/authenticationSlice'
import classes from './NavLinkBarForWelcome.module.scss'

const NavLinkBar: React.FC = () => {
    const { accessToken } = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const authUserLinks = () => {
        if (!accessToken) {
            return (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign up</Link>
                </>
            )
        }
        return <Link onClick={() => dispatch(logout())} to='/'>Logout</Link>
    }
    return (
        <div className={classes['welcome-navigation']}>
            {authUserLinks()}
            <Link to='/recipes'>Find recipes</Link>
        </div>
    )
}

export default NavLinkBar
