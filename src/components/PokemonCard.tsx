import { useState, useEffect, useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ImageColors from 'react-native-image-colors'

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props ) => {

    const [ bgColor, setBgColor ] = useState('grey');
    const isMounted = useRef( false );

    const getColors = async(uri: string) => {
        const colors = await ImageColors.getColors(uri, {});
   
        let primary;
   
        switch (colors.platform) {
           case 'android':
              primary = colors.dominant;
              
              break;
   
           case 'ios':
              primary = colors.primary;
        
           default:
              break;
        }
   
        setBgColor(primary || 'grey' );
        
   
        return [primary];
     }
   
   
     useEffect(() => {
        
        if ( !isMounted ) return;

        getColors(pokemon.picture);
        
        return () => {
            isMounted.current = false
        }
     }, [])
    

    return (
      <TouchableOpacity
        activeOpacity={ 0.8 }
      >
        <View style={{ 
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
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
        // backgroundColor: 'grey',
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
