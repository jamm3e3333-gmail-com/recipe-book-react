import { useState } from 'react'
import { HandleChangeInputEvent} from '../utils'
import { useAppDispatch } from '../store'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

/**
 * 
 * @param validateInputValue 
 * @param option optional parameter to save/update input value in store on React.ChangeEvent
 * @param option.storeAction action function that manipulates entered payload for store
 * @param option.actionPayloadKeyName a key of payload action
 * 
 */
const useInputChangeEvent = <T extends {[key: string]: string}>(
    validateInputValue: (inputValue: string) => boolean,
    option?: {
        storeAction: ActionCreatorWithPayload<T, string>,
        actionPayloadKeyName: keyof T,
    }
) => {
    const [isInputValueValid, setIsInputValueValid] = useState(true)
    const dispatch = useAppDispatch()

    const handleChangeEvent: HandleChangeInputEvent = e => {
        setIsInputValueValid(
            validateInputValue(e.target.value)
        )
        if (option?.storeAction) {
            dispatch(
                option.storeAction({
                    [option?.actionPayloadKeyName]: e.target.value
                } as T)
            )
        }
    }
    return {
        handleChangeEvent,
        isInputValueValid,
    }
}

export default useInputChangeEvent
