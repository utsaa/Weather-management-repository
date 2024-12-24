import { useParams } from "react-router-dom"
import useFetchWeatherById from "../hooks/userFetchWeatherById.ts";
import { Box, Stack } from "@mui/material";
import React from "react";


const WeatherPage: React.FC<{}> = ():React.ReactElement=>{
    const {id} = useParams();
    
    const id1 = parseInt(id as string);
    const {weather} = useFetchWeatherById(id1);

    return (
        (!! weather)?<Stack bgcolor={'whitesmoke'}>
            <Box color={'black'}>ID  {id} </Box>  
          <Box  width={0.002}></Box>

          <Box color={'black'}> Name {weather.name} </Box>  
          <Box  width={0.002}></Box>
          
          <Box color={'black'}> Lat {weather.lat} </Box>  
          <Box  width={0.002}></Box>
          
          <Box color={'black'}> Long {weather.long} </Box>  
          <Box  width={0.002}></Box>
          
          {!!weather.time && <><Box color={'black'}> time {(new Date(weather.time)).toLocaleDateString()} : {(new Date(weather.time)).toLocaleTimeString()} </Box><Box color={'blue'}></Box></>}
        </Stack>:<></>
          
        
    );

};

export default WeatherPage;