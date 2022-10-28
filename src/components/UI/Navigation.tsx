import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../store/storeSlices/authenticationSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import classes from './Navigation.module.scss'

const Navigation: React.FC<{className?: string }> = ( props ) => {
    const { username, accessToken } = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <>
            <nav className={`${props.className} ${classes['nav-container']}`}>
                <p><Link to='/'>Recipe book</Link></p>
                {!accessToken &&
                    <div className={classes['nav-auth']}>
                        <p><Link to='/login'>Login</Link></p>
                        <p><Link to='/signup'>Sign up</Link></p>
                    </div>
                }
                {accessToken &&
                    <div className={classes['nav-auth']}>
                        <p onClick={handleLogout}><Link to='/'>Logout</Link></p>
                        <p>Me: {username}</p>
                    </div>}
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation