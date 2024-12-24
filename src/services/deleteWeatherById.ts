import api from "./api.ts";


const deleteWeatherById = async(id: number) =>{

    try{
    const response = await api.delete(`/weather/${id}`);
    return response.status;
    } catch(error){
        console.error('fetching a weather failed', error.message);
    }
}

export default deleteWeatherById;