import React from 'react'
import classes from './Input.module.scss'

interface InputProps {
    name: string
    placeholder?: string
    value?: string
    className?: string
    type?: 'text' | 'password'
    onChange?: ( e: React.ChangeEvent<HTMLInputElement> ) => void
}

const Input: React.FC<InputProps> = ( { name, onChange, placeholder, type = 'text', value, className } ) => {
    return (
        <input
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} ${classes['form-input']}`}
            type={type}
            value={value}
        />
    )
}

export default Input
