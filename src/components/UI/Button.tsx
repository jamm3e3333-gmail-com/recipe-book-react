import React from 'react'
import classes from './Button.module.scss'

interface ButtonProps {
    type: 'submit' | 'button'
    onClick?: ( e: React.MouseEvent<HTMLButtonElement> ) => void
    className?: string
    children?: React.ReactNode | React.ReactNode[]
    name?: string
    disabled?: boolean
}


const Button: FunComponent<ButtonProps> = ( props ) => {
    return (
        <button
            className={`${props.className} ${classes[ 'button-generic' ]}`}
            type={props.type}
            name={props.name}
            disabled={props.disabled ?? false}
        >
                {props.children}
        </button>
    )
}

export default Button