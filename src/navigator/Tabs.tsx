import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1 } from './Tab1';

import { Tab2Screen } from '../components/Tab2';

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
        component={ Tab1 } 
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
        component={ Tab2Screen } 
        options={{
            tabBarLabel: 'Búsqueda',
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