import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ErrorPage.module.scss'

const ErrorPage: React.FC = () => {
    return (
        <>
            <div className={classes.error}>
                <h1>Oopsie!</h1>
                <p className={classes['error--code']}>404</p>
                <p className={classes['error--notfound']}>'Not found'</p>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}

export default ErrorPage