import { useEffect, useState } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from '../interfaces/pokemonInterfaces';

export const usePokemon = ( id: string ) => {

    const [ isLoading, setIsLoading ] = useState( true );
    const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemons = async () => {
        const resp = await pokemonApi<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${ id }`)
        setPokemon( resp.data );
        setIsLoading( false );
    }

    useEffect(() => {

        loadPokemons();

    },[])

    return {
      isLoading,
      pokemon
    }
}
