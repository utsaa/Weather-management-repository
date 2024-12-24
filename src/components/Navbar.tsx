import { Box, Stack } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> =(): React.ReactElement=>{

    return <Stack>
        <Box color={'black'}>
        this is nav bar
        </Box>
        <Box height={0.002} color={'blue'}></Box>
        <Link to={'/create'}>Create Weather</Link>
        <Box height={0.005} color={'blue'}></Box>

        </Stack>
}

export default NavBar;