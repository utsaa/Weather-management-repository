import Weather from "../models/Weather";
import api from "./api.ts"

const fetchWeatherById = async(id: number):Promise<Weather|undefined>=>{

    try{
    const response = await api.get<Weather>(`/weather/${id}`);
    return response.data;
    } catch(error){
        console.error('fetching a weather failed', error.message);
    }
}

export default fetchWeatherById;