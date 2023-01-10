import { Brightness1, Brightness1Outlined, CheckBox } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { MuiContext } from "context/MuiModeContext";
import { useContext } from "react";

const MuiPage = () => {

    const [dark, setDark] = useContext(MuiContext)

    return (
        <Paper sx={{ height: "100vh" }}>
            <Typography variant="h3" component="h1" textAlign="center" py={4}>Welcome to MUI Page</Typography>
            <Paper elevation={24} sx={{
                width: 300,
                mx: "auto"
            }}>
                salam abi
            </Paper>
            <Typography variant="body1">
                salam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio ullam tempore cupiditate distinctio recusandae est repudiandae, aut facere quod in, necessitatibus a modi debitis! Maxime velit dolorem obcaecati voluptate!
            </Typography>
            <Button
                onClick={() => {
                    setDark(!dark)
                }}
                size="large" variant="outlined" sx={{ display: 'block', mx: "auto" }}>
                {dark ? 'light' : 'dark'}
            </Button>
            <Button
                size="large" variant="outlined" sx={{ display: 'block', mx: "auto" }}>
                {dark ? 'light' : 'dark'}
            </Button>
            <IconButton>
                <Brightness1Outlined />
            </IconButton>
            <CheckBox />
        </Paper>
    )
}


export default MuiPage;