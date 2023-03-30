import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: ( value: string ) => void;
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [ textValue, setTextValue ] = useState('');
    
    const debouncedValue = useDebouncedValue( textValue );

    useEffect(() => {
        onDebounce( debouncedValue );
    }, [ debouncedValue ])

    return (
        <View style={{ 
            ...styles.container, 
            ...style as any
        }}>
           <View style={ styles.textBackground }>

                <TextInput 
                    placeholder='Buscar Pokemon'
                    style={{ 
                        ...styles.textInput,
                        top: ( Platform.OS === 'android' ) ? 2 : 0 ,
                        color: 'black'
                    }}
                    autoCapitalize="none"
                    autoCorrect={ false }
                    value={ textValue }
                    onChangeText={ setTextValue }
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
