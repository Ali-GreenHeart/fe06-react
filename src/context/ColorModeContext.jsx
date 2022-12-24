import { createContext, useEffect, useState } from "react";
import styles from "./index.module.css"

export const COLOR_MODE_CONTEXT = createContext({})

const ColorModeContext = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('color_mode') === 'light') {
            setIsDarkMode(false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('color_mode', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])

    const changeDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={`${styles.usersContainer} ${isDarkMode ? styles.darkMode : ""}`}>
            <COLOR_MODE_CONTEXT.Provider value={[isDarkMode, changeDarkMode]}>
                {children}
            </COLOR_MODE_CONTEXT.Provider>
        </div>
    )
}
export default ColorModeContext;