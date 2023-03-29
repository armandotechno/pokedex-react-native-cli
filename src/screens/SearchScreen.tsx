import { Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ 
            flex: 1, 
            top: ( Platform.OS === 'android' ) ? top + 10 : top,
            marginHorizontal: 20
        }}>
            <SearchInput />
        </View>
    )
}
