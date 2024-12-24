import api from "./api.ts";

interface WeatherInput {
    name: string,
lat: number;
long: number;
time?: Date;
}
const createWeather = async(weatherToCreate: WeatherInput)=>{

    try{
    const response = await api.post('/weather',{
        name: weatherToCreate.name,
        lat: weatherToCreate.lat,
        long: weatherToCreate.long,
        time: weatherToCreate?.time
    });
    return response.data;
} catch(error){
    console.error('error while creating weather', error.message);
}

};

export default createWeather;