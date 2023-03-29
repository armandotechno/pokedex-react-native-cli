import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{       // * tabBarOptions fue reemplazado por screenOptions
            headerShown: false,
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: {
                marginBottom: ( Platform.OS === 'android' ) ? 10 : 0
            },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255, 0.92)',
                borderWidth: 0, // Ios
                elevation: 0, // Android
                height: ( Platform.OS === 'android' ) ? 60 : 80
            }
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={ Navigator } 
        options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({ color }) => (
                <Icon 
                    name='list-outline' 
                    size={ 25 }  
                    color={ color } 
                />
            )
        }}
    />
      <Tab.Screen 
        name="SearchScreen" 
        component={ SearchScreen } 
        options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({ color }) => (
                <Icon 
                    name='search-outline' 
                    size={ 25 }  
                    color={ color } 
                />
            )
        }}
    />
    </Tab.Navigator>
  );
}