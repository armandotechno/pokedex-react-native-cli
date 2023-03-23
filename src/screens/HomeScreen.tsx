import { ActivityIndicator, FlatList, Image, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
      <>
        <Image 
          source={ require('../assets/pokebola.png') }
          style={ styles.pokebolaBG }
        />


        <FlatList 
          data={ simplePokemonList }
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
              top: top + 20,
              marginBottom: top + 20,
            }}>Pokedex</Text>
          )}

          // Infinite scroll
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 } // como un 40% de la parte de abajo del scroll

          ListFooterComponent={( 
            <ActivityIndicator 
              style={{ height: 100 }} 
              size={ 20 }
              color="purple" 
            /> 
          )}
        />

        
      </>
    )
}
