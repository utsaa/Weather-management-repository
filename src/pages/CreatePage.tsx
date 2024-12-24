import { Box, Button, Input, Stack } from "@mui/material"
import React from "react"
import useCreateWeather from "../hooks/useCreateWeather.ts";


const CreatePage : React.FC<{}> = (): React.ReactElement =>{

    const [name, setName] = React.useState<string>('');
    const [lat, setLat] = React.useState<string>('');
    const [long, setLong] = React.useState<string>('');
    const {weatherCreated, triggerCreate} = useCreateWeather();

    const onClick = ()=>{
        const latNumber = parseInt(lat);
        const longNumber = parseInt(long);
        if (name.trim().length>0 && !isNaN(latNumber) && !isNaN(longNumber)){
             triggerCreate({name: name, lat: latNumber, long: longNumber});
        }
    }

    React.useEffect(()=>{
        if (!!weatherCreated){
            console.log('Weather created is', weatherCreated);
            alert('weather created');
        }
    },[weatherCreated])

    return (
       <Stack>
        <Box color={'black'}> Enter Weather credentials</Box>
        <Box color={'grey'} height={0.005}/>
        <Input fullWidth={false} color={'secondary'} type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" aria-label="Enter name">
        </Input>
        <Box color={'grey'} height={0.002}/>
        <Input color={'secondary'} type='number' value={lat} onChange={(e)=>setLat(e.target.value)} placeholder="Enter Lat" aria-label="Enter name">
        </Input>
        <Box color={'grey'} height={0.002}/>
        <Input color={'secondary'} type='number' value={long} onChange={(e)=>setLong(e.target.value)} placeholder="Enter Long" aria-label="Enter name">
        </Input>
        <Button fullWidth={false} color="primary" onClick={onClick} size="small" type="submit" variant="contained" aria-label="Subnit">Submit</Button>
       </Stack> 
    )
};

export default CreatePage;