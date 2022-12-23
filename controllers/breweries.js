const Brewery = require('../models/Breweries')

module.exports = {
    displayAllBreweries: async (req,res)=>{
        try{
            const breweries = await Brewery.find({}).lean();
            console.log(breweries);
            res.status(200).json(breweries);
            
        }catch(err){
            res.status(500).json(err)
        }
    },
    getDetails: async (req,res)=>{
        try{
           const id = await req.params.id;
           const brewery = await Brewery.findById({_id: id}).lean();
           console.log(brewery);
           res.status(200).json(brewery);
        }catch(err){
           res.status(500).json(err);
        }
    },
}    