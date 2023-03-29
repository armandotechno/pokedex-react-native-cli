import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';

import { Loading } from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isfetching, simplePokemonList } = usePokemonSearch()

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
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: ( Platform.OS === 'android' ) ? top + 20 : top
                }}
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
                padding: 10,
                marginTop: top + 60
              }}>Pokedex</Text>
            )}
          />

        </View>
    )
}


