import React from "react";
import Weather from "../models/Weather";
import fetchAllWeather from "../services/fetchWeather.ts";


const useFetchWeather  = ()=>{
    
    const [weathers, setWeathers] = React.useState<Weather[]|undefined>(undefined);

    const refetch = React.useCallback(async ()=>{
    const response = await fetchAllWeather();
            setWeathers(response);
    },[]);

    React.useEffect(()=>{
    refetch();
    },[refetch]);
    return {weathers, refetch};
}

export default useFetchWeather;