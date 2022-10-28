import React from 'react'
import classes from './Container.module.scss'

const Container: React.FC<{ children: React.ReactNode | React.ReactNode[], className?: string }> = ( props ) => {
    return (
        <div className={`${props.className} ${classes.container}`}>{props.children}</div>
    )
}

export default Container