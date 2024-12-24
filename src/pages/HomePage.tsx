import React from 'react';
import useFetchWeather from '../hooks/useFetchWeather.ts';
import NavBar from '../components/Navbar.tsx';
import WeatherComp from '../components/WeatherComp.tsx';
import { Stack } from '@mui/material';

const HomePage : React.FC<{}> = ():React.ReactElement =>{

    const {weathers, refetch}  = useFetchWeather();


    const onDelete = ()=>{
        refetch();
    }

    React.useEffect(()=>{
        console.log(weathers);
    },[weathers]);

    return (
        <>
        <NavBar />
        <Stack>
        {
            weathers?.map(ele=> <div key={ele.id}><WeatherComp id={ele.id} name={ele.name} lat={ele.lat} long={ele.long} time={ele.time} onDelete={onDelete}/></div>)
        }
        </Stack>
        </>
    );
};

export default HomePage;
