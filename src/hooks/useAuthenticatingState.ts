import { useState } from 'react'

const useAuthenticatingState = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    return {
        isAuthenticating,
        setIsAuthenticating,
    }
}

export default useAuthenticatingState
