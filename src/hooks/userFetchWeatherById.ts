import React from "react";
import Weather from "../models/Weather";
import fetchWeatherById from "../services/fetchWeatherById.ts";


const useFetchWeatherById  = (id: number)=>{
    
    const [weather, setWeather] = React.useState<Weather|undefined>(undefined);

    const refetch = React.useCallback(async()=>{
        const aWeather = await fetchWeatherById(id);
        setWeather(aWeather);
    },[id]);
    React.useEffect(()=>{
        refetch();
    },[refetch]);
    return {weather, refetch};
}

export default useFetchWeatherById;