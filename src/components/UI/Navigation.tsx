import React from 'react'
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
        <nav className={`${props.className} ${classes['nav-container']}`}>
            <p>Recipe book</p>
            {!accessToken &&
                <div className={classes['nav-auth']}>
                    <p><a href='/#' >Login</a></p>
                    <p><a href='/#' >Sign up</a></p>
                </div>
            }
            {accessToken &&
                <div className={classes['nav-auth']}>
                    <p onClick={handleLogout}><a href='/#'>Logout</a></p>
                    <p>{username}</p>
                </div>}
        </nav>
    )
}

export default Navigation