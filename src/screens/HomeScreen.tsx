import { ActivityIndicator, FlatList, Image, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

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
          renderItem={ ({item}) => (
            <FadeInImage 
              uri={ item.picture }
              style={{
                width: 100,
                height: 100,
              }}
            />
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

        {/* <Text style={{ 
          ...styles.title, 
          ...styles.globalMargin,
          top: top + 20
        }}>Pokedex</Text> */}
      </>
    )
}
