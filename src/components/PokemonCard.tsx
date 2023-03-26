import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props ) => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.8 }
      >
        <View style={{ 
            ...styles.cardContainer,
            width: windowWidth * 0.4
         }}>
            {/* Nombre del pokemon y el id */}
            <View>
                <Text style={ styles.name }>
                    { pokemon.name } 
                    { '\n#' + pokemon.id }
                </Text>
            </View>

            <View style={ styles.pokebolaContainer }>
                <Image
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokebola }
                />
            </View>
        </View>

        <FadeInImage 
            uri={ pokemon.picture }
            style={ styles.pokemonImage }
        />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebolaContainer: {
        width: 80,
        height: 90,
        position: 'absolute',
        bottom: -12,
        right: -0,
        overflow: 'hidden',
        opacity: 0.5,
    },
    pokebola: {
        width: 80, 
        height: 80,
        position: 'absolute',
        right: -14,
        bottom: 4
    },
    pokemonImage: {
        width: 90,
        height: 90,
        position: 'absolute',
        right: -1,
        bottom: 0,
    }
});
