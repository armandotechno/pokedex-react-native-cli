import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
    return (
        <View style={ styles.container }>
           <View style={ styles.textBackground }>

                <TextInput 
                    placeholder='Buscar Pokemon'
                    style={{ 
                        ...styles.textInput,
                        top: ( Platform.OS === 'android' ) ? 2 : 0 
                    }}
                    autoCapitalize="none"
                    autoCorrect={ false }
                />

                <Icon 
                    name="search-outline"
                    size={ 30 }
                    color="grey"
                />

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    }
});
