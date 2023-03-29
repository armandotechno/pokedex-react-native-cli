import { ActivityIndicator, FlatList, StyleSheet, Text, View, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles as globalStyles } from '../theme/appTheme';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isfetching, simplePokemonList } = usePokemonSearch()

    if ( isfetching ) {
        return (
            <View style={ styles.activityContainer }>
                <ActivityIndicator 
                    size={ 50 }
                    color="blue"
                />
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <View style={{ 
            flex: 1, 
            top: ( Platform.OS === 'android' ) ? top + 10 : top,
            marginHorizontal: 20
        }}>
            <SearchInput />

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
                ...globalStyles.title, 
                ...globalStyles.globalMargin,
                padding: 10
              }}>Pokedex</Text>
            )}
          />

        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
