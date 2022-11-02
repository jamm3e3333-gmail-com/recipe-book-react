import { HandleChangeInputEvent } from '../../utils'
import ErrorIcon from '../icons/ErrorIcon'
import classes from './Input.module.scss'

interface InputProps {
    name: string
    isValid: boolean
    placeholder?: string
    value?: string
    className?: string
    type?: 'text' | 'password'
    onChange?: HandleChangeInputEvent
}

const Input: FunComponent<InputProps> = ({
    name,
    onChange,
    placeholder,
    type = 'text',
    value,
    className,
    isValid
}) => {

    return (
        <div className={classes['input-box']}>
            <input
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                className={`${className} ${classes['form-input']}`}
                type={type}
                value={value}
            />
                {!isValid &&
                    <span className={classes['input-box--error']}><ErrorIcon />Invalid {name.toLowerCase()} value!</span>
                }
        </div>
    )
}

export default Input
