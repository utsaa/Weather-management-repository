import React from "react";
import Weather from "../models/Weather";
import createWeather from "../services/createWeather.ts";

interface WeatherInput {
    name: string,
lat: number;
long: number;
time?: Date;
}

const useCreateWeather  = ()=>{
    
    const [weatherCreated, setWeatherCreated] = React.useState<Weather | undefined>(undefined);

    const triggerCreate = async (weather: WeatherInput)=>{
        const response  = await createWeather(weather)
            setWeatherCreated(response);
       };
    
    return {weatherCreated, triggerCreate};
}

export default useCreateWeather;