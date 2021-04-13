import { useLocalObservable } from 'mobx-react-lite'
import React, { createContext, useContext } from 'react'
import { createWardrobeStore } from '../Stores/WardrobeStore'

const WardrobeContext = createContext(null)

export const WardrobeProvider = ({ children }) => {
    const wardrobeStore = useLocalObservable(createWardrobeStore)

    return <WardrobeContext.Provider value={wardrobeStore}>
        {children}
    </WardrobeContext.Provider>
}

export const useWardrobeStore = () => useContext(WardrobeContext)