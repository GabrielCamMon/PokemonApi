import axios from "axios"


export const baseAxios = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`,
  });


export const apiGetAllPokemons = () =>
   baseAxios.get(`/pokemon`);


export const getPokemonsByIdApi = (id) =>
baseAxios.get(`/pokemon/${id}`);
