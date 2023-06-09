import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    )
}

export default App;