import { Box, Button, Stack } from "@mui/material";
import Weather from "../models/Weather.tsx"
import React from "react";
import useDeleteWeatherById from "../hooks/useDeleteWeatherById.ts";
import { Link } from "react-router-dom";

interface DeleteProps{
    onDelete?: ()=>void;
}

type weatherCompProps = Weather & DeleteProps;

const WeatherComp : React.FC<weatherCompProps> = (props): React.ReactElement =>{

    const {
        id, name, lat, long, time, onDelete
    }=props

    const dateTime =new Date(time);

    const {status, triggerDelete} = useDeleteWeatherById();
    const onDeleteWeather = ()=>{
        triggerDelete(id);
        
    };

    React.useEffect(()=>{
        if (!!status && status === 200){

        console.log('delete Status', status);
        onDelete?.();}
        else if(!!status){
            console.error('delete status', status)
        }
    }, [status, onDelete]);

    return (
        <>
        <Stack bgcolor={'whitesmoke'} direction={'row'}>
          <Box color={'black'}>ID  {id} </Box>  
          <Box  width={0.002}></Box>

          <Box color={'black'}> Name {name} </Box>  
          <Box  width={0.002}></Box>
          
          <Box color={'black'}> Lat {lat} </Box>  
          <Box  width={0.002}></Box>
          
          <Box color={'black'}> Long {long} </Box>  
          <Box  width={0.002}></Box>
          
          {!!time && <><Box color={'black'}> time {dateTime.toLocaleDateString()} </Box><Box color={'blue'}></Box></>}

          <Button color={'primary'} type="button" size="small" onClick={onDeleteWeather} > Delete</Button>
          <Box width={0.002}></Box>
          <Link to={`/${id}`} color='blue'> Show</Link>
            
        </Stack>
        <div style={{ height: "0.1vh", backgroundColor: "grey" }}>

        </div>
        </>
    )

}

export default WeatherComp;