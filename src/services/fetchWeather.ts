import Weather from "../models/Weather";
import api from "./api.ts"

const fetchAllWeather = async (): Promise<Weather[] | undefined>=>{
    try{
       const response = await api.get("/weather");
       return  response.data;
    } catch(error){
        console.log('error fetching weather data', error);
    }
}

export default fetchAllWeather;