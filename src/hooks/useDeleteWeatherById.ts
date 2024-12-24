import React from "react";
import deleteWeatherById from "../services/deleteWeatherById.ts";


const useDeleteWeatherById  = ()=>{
    
    const [status, setStatus] = React.useState<number | undefined>(undefined);

    const triggerDelete = async (id: number)=>{
        const response = await deleteWeatherById(id);
        setStatus(response);
    }
    
    return {status, triggerDelete};
}

export default useDeleteWeatherById;