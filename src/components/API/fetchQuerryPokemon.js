<<<<<<< HEAD
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
=======
import axios from "axios"
const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchQueryPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon?limit=${limit}&offset=${offset}`)
        return data;
    }catch(e){}
}
>>>>>>> 4608ad95c75e93278bd3f919d176dc552756c208
