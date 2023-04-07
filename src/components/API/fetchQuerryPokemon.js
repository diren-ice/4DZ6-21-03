import axios from "axios"
const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchQueryPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon?limit=${limit}&offset=${offset}`)
        return data;
    }catch(e){}
}


export const getPokemons = async(id) => {
 try {
    const { data } = await axios.get(baseURL + `pokemon/${id}`);
    return data;
 } catch (e) {
    console.log(e);
 }
}

