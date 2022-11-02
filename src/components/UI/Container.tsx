import React from 'react'
import classes from './Container.module.scss'

const Container: FunComponent<{ children: React.ReactNode | React.ReactNode[], className?: string, key?: string | number }> = ( props ) => {
    return (
        <div key={props.key} className={`${props.className} ${classes.container}`}>{props.children}</div>
    )
}

export default Container