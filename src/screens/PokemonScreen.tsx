import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params
    const { name, id, picture } = simplePokemon
    const { top } = useSafeAreaInsets()

    const { isLoading, pokemon } = usePokemon( id );
    console.log(pokemon);
    

    return (
      <View style={{ flex: 1 }}>
        {/* Header Container */}
        <View style={{
          ...styles.headercontainer,
          backgroundColor: color,
        }}>

          {/* Back Button */}
          <TouchableOpacity
            onPress={ () => navigation.pop() }
            activeOpacity={ 0.8 }
            style={{ ...styles.backButton, top: top + 5 }}
          >
            <Icon 
              name="arrow-back-outline"
              color="white"
              size={ 30 }
            />
          </TouchableOpacity>

          {/* Nombre del pokemon */}
          <Text
            style={{
              ...styles.pokemonName,
              top: top + 35
            }}
          >
            { name + '\n' }#{ id }
          </Text>

          {/* Pokebola */}
          <Image
            source={ require('../assets/pokebola-blanca.png') }
            style={ styles.pokebola }
          />

          {/* Imagen del pokemon */}
          <FadeInImage 
            uri={ picture }
            style={ styles.pokemonImage }
          />

        </View>

        {/* Detalles y loading */}  
        
        {
          ( isLoading )
            ?   <View style={ styles.loadingIndicator }>
                  <ActivityIndicator
                    color={ color }
                    size={ 40 }
                  />
                </View>
            : <PokemonDetails pokemon={ pokemon } />
        }

        

      </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
      height: 320,
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 700,
      borderBottomLeftRadius: 700
    },
    backButton: {
      position: 'absolute',
      left: 20
    },
    pokemonName: {
      color: 'white',
      fontSize: 40,
      alignSelf: 'flex-start',
      left: 20
    },
    pokebola: {
      width: 200,
      height: 200,
      bottom: -20,
      opacity: 0.7
    },
    pokemonImage: {
      width: 200,
      height: 200,
      position: 'absolute',
      bottom: -15
    },
    loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});