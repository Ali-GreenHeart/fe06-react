import { ThemeProvider } from "@mui/material"
import theme from "theme"
const { createContext, useState } = require("react")


export const MuiContext = createContext(false)

const MuiModeContext = ({ children }) => {
    const [dark, setDark] = useState(false)



    return <MuiContext.Provider value={[dark, setDark]}>
        <ThemeProvider theme={theme(dark ? 'dark' : 'light')}>
            {children}
        </ThemeProvider>
    </MuiContext.Provider>
}

export default MuiModeContext;