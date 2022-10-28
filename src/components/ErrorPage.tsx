import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import classes from './ErrorPage.module.scss'

const useAppRouteError = useRouteError as () => { statusCode?: number, message?: string}

const ErrorPage: React.FC = () => {
    const error = useAppRouteError()
    return (
        <>
            <div className={classes.error}>
                <h1>Oopsie!</h1>
                <p className={classes['error--code']}>{error.statusCode ?? 404}</p>
                <p className={classes['error--notfound']}>{error.message ?? 'Not found'}</p>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}

export default ErrorPage