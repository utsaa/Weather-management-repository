const express = require("express");
const Weather = require("../models/weatherModel");

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
 const weathers = await Weather.findAll();
 res.status(200).json(weathers);
    }catch (error){
    res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    try{
        const weather = await  Weather.create(req.body)
        res.status(201).json(weather);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const weather = await Weather.findByPk(id);
        if (!weather){
            res.status(404).json({message: 'Weather not found'});
            return;
        }
        res.status(200).json(weather);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});

router.delete('/:id', async (req, res)=>{
try{
    const {id} = req.params;
   const weather = await Weather.findByPk(id);
if (!weather){
    res.status(404).json({message: 'Weather not found'});
    return;
}
  await weather.destroy();
  res.status(200).json({message: `weather with ${id} deleted successfully`})
}catch(error){
    res.status(500).json({message: error.message});
}
});

module.exports = router;