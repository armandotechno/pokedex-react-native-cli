import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';

import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isfetching, simplePokemonList } = usePokemonSearch()

    const [ pokemonFiltered, setPokemonFiltered ] = useState<SimplePokemon[]>([]);

    const [ term, setTerm ] = useState('');

    useEffect(() => {

      if ( term.length === 0 ) {
        return setPokemonFiltered([]);
      }
      
      //* Filtrando los pokemones
      // Si no es por número o ID
      if ( isNaN( Number( term ) ) ) {
        setPokemonFiltered(
          simplePokemonList.filter( 
              (poke) => poke.name.toLowerCase()
                .includes( term.toLowerCase() ) 
          )
        )
      } else {
        // setPokemonFiltered(
        //   [ simplePokemonList.find(poke  => poke.id === term )! ]
        // )  //* Manera con el símbolo ! 

        const pokemonById = simplePokemonList.find(poke  => poke.id === term );
        setPokemonFiltered(
          ( pokemonById ) ? [ pokemonById ] : []
        )
      }


    }, [ term ])

    if ( isfetching ) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{ 
            flex: 1, 
            marginHorizontal: 20
        }}>
            <SearchInput 
            onDebounce={ ( value ) => setTerm( value ) }
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: ( Platform.OS === 'android' ) ? top + 20 : top
                }}
            />

            <FlatList 
            data={ pokemonFiltered }
            keyExtractor={ (pokemon) => pokemon.id  }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }
            renderItem={ ({item}) => (
              <PokemonCard pokemon={ item }/>
            )}

            // Header
            ListHeaderComponent={(
              <Text style={{ 
                ...styles.title, 
                ...styles.globalMargin,
                padding: 10,
                marginTop: top + 60
              }}>{ term }</Text>
            )}
          />

        </View>
    )
}


