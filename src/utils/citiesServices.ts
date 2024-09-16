import citiesJson from '../cities/cities.json';
import stateJson from '../cities/states.json';
import countriesJson from '../cities/countries.json';
import pinJson from '../cities/pincode.json';

import {Index} from 'flexsearch';

const cityIndex =  new Index({
    tokenize: "forward",
    cache: false
});
const countryIndex =  new Index({
    tokenize: "forward",
    cache: false
});
const pincodeIndex =  new Index({
    tokenize: "forward",
    cache: false
});
const stateIndex =  new Index({
    tokenize: "forward",
    cache: false
});


citiesJson.forEach((city, id) => cityIndex.add(id, city));
stateJson.forEach((state, id) => stateIndex.add(id, state));
countriesJson.forEach((country, id) => countryIndex.add(id, country));
pinJson.forEach((pincode, id) => pincodeIndex.add(id, pincode));



export const searchCities = (query: string,filter: number): string []=> {
    const resultIds: number[] = cityIndex.search(query,filter) as number[];
    const cityNames: string[] = resultIds.map((id: number) => citiesJson[id]);
    return cityNames;
};

export const searchCountries = (query: string,filter: number): string []=> {
    const resultIds: number[] = countryIndex.search(query,filter) as number[];
    const countryNames: string[] = resultIds.map((id: number) => countriesJson[id]);
    return countryNames;
};
export const searchPins = (query: string,filter: number): string []=> {
    const resultIds: number[] = pincodeIndex.search(query,filter) as number[];
    const pinNo: string[] = resultIds.map((id: number) => pinJson[id]);
    return pinNo;
};
export const searchStates = (query: string,filter: number): string []=> {
    const resultIds: number[] = stateIndex.search(query,filter) as number[];
    const statesNames: string[] = resultIds.map((id: number) => stateJson[id]);
    return statesNames;
};
