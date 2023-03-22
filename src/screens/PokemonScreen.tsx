import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export const PokemonScreen = () => {
    return (
      <View>
        <Text>Pokemon Screen</Text>
        <Icon 
            name='star-outline'
            size={ 100 }
            color="blue"
        />
      </View>
    )
}
