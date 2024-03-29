import React, {createContext, useState} from 'react'
// changer le theme du body en cliquant sur un btton 

export const ThemeStore = createContext()


const ThemeProvidier = ({children}) => {
const [theme, setTheme] = useState(true)
    return (
        <ThemeStore.Provider value={[theme, setTheme]}>
            {children}
        </ThemeStore.Provider>
    )
}

export default ThemeProvidier