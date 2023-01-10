import { blue, green, red } from "@mui/material/colors";

const { createTheme } = require("@mui/material");

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: green[300]
        },
        secondary: {
            main: blue[500]
        },
    },
    typography: {
        h3: {
            // color: red[300]
        },
        body1: {
            fontFamily: "cursive",
            fontSize: 30,
            color: green[600]
        }
    }
})


export default theme;