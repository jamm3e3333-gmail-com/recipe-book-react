import React from 'react'

declare global {
    type FunComponent <T = {}> = React.FC<T>
}