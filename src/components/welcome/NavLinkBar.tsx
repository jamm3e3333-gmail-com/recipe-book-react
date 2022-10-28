import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavLinkBar.module.scss'

const NavLinkBar: React.FC = () => {
    return (
        <div className={classes['welcome-navigation']}>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/'>Find recipes</Link>
        </div>
    )
}

export default NavLinkBar
