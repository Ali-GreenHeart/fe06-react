import { blue, green, red } from "@mui/material/colors";

const { createTheme } = require("@mui/material");

const theme = (mode) => createTheme({
    palette: {
        mode: mode,
        primary: {
            main: green[300]
        },
        secondary: {
            main: blue[500]
        },
    },
    typography: {
        body1: {
            fontFamily: "cursive",
            fontSize: 30,
            color: mode === 'dark' ? red[200] : green[600]
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                onClick: () => {
                    console.log('salam')
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                defaultChecked: true
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: false
            }
        }
    }
})


export default theme;