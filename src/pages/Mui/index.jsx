import { Box, Paper, Typography } from "@mui/material";

const MuiPage = () => {
    return (
        <Paper>
            <Typography variant="h3" component="h1" textAlign="center" my={4}>Welcome to MUI Page</Typography>
            {/* <Box width={300} height={400} bgcolor="primary.main">
                test
            </Box>
            <Box width={300} height={400} bgcolor="secondary.main">
                test
            </Box> */}
            <Paper elevation={24} sx={{
                width: 300,
                mx: "auto"
            }}>
                salam abi
            </Paper>
            <Typography variant="body1">
                salam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio ullam tempore cupiditate distinctio recusandae est repudiandae, aut facere quod in, necessitatibus a modi debitis! Maxime velit dolorem obcaecati voluptate!
            </Typography>
        </Paper>
    )
}


export default MuiPage;