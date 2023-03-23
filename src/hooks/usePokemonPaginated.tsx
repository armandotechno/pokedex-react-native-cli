import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonPaginated = () => {

    const nextUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    
    const loadPokemons = async() => {

        const resp = await pokemonApi( nextUrl.current );
        console.log( resp.data );
        

    }

    useEffect(() => {
        loadPokemons();
    }, [])
    
}


