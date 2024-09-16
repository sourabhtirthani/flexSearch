import { Request,Response } from "express";
import { searchCities,searchCountries,searchPins,searchStates } from "../utils/citiesServices";
import { SEARCH_TYPES } from "../utils/constants";
export const findCity=(req:Request,res:Response)=>{
    const { type } = req.params;
    const { search='', filter } = req.query;
    let data:string[]=[];
    const filterNumber = filter !== undefined ? Number(filter) : 0;
    if(!type ) return res.status(400).json({ message:"No type provided"});

    if (!SEARCH_TYPES.includes(type)) return res.status(400).json({ message:`${type} does not exist in the search types.`});
    
    switch(type){
        case 'states' : data=searchStates(search.toString(),filterNumber);
                        break;
        case 'cities' : data=searchCities(search.toString(),filterNumber);
                        break;
        case 'pin' :    data=searchPins(search.toString(),filterNumber);
                        break;
        case 'countries' : data=searchCountries(search.toString(),filterNumber);
                        break;
    }

    if (data.length === 0) {
        return res.status(404).json({ message: `No matching ${type} found` });
    }

    return res.json({ data });
}