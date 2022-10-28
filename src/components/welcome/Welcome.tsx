import React from 'react'
import NavLinkBar from './NavLinkBar'
import classes from './Welcome.module.scss'

const Welcome: React.FC = () => {
    return (
        <div className={classes['welcome-box']}>
            <header className={classes['welcome-logo']}>
            </header>
            <NavLinkBar />
        </div>
    )
}

export default Welcome