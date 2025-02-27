import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';

import HomeScreen from './src/views/App';  // Make sure the path is correct
import Screen_Clock from './src/views/Screen_Clock.js';
import Screen_Music from './src/views/Screen_Music.js'
import Screen_Speedometer from './src/views/Screen_Speedometer.js';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen_Clock" component={Screen_Clock} />
        <Stack.Screen name="Screen_Music" component={Screen_Music} />
        <Stack.Screen name="Screen_Speedometer" component={Screen_Speedometer}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Register the app component
AppRegistry.registerComponent('main', () => App);
