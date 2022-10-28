import React from 'react'
import classes from './NavLinkBar.module.scss'

const NavLinkBar: React.FC = () => {
    return (
        <div className={classes['welcome-navigation']}>
            <a href='/#'>Login</a>
            <a href='/#'>Sign up</a>
            <a href='/#'>Find recipes</a>
        </div>
    )
}

export default NavLinkBar
