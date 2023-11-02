import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Dark from './screen/dark';
import {ModeProvider,useMode} from './screen/context';

 
const Stack = createStackNavigator();

 
export default function App() {
  return (
    <NavigationContainer>
      <ModeProvider>
       <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        
        <Stack.Screen name="Dark" component={Dark} />
        
      </Stack.Navigator>
      </ModeProvider>
    </NavigationContainer>

  );
}
