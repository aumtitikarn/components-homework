import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Dark from './screen/dark';
import Data from './screen/data';
import {ModeProvider,useMode} from './screen/context';
import { LanguageProvider } from './screen/LanguageContext';

 
const Stack = createStackNavigator();

 
export default function App() {
  return (
    <NavigationContainer>
       <LanguageProvider>
      <ModeProvider>
       <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Dark" component={Dark} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
      </ModeProvider>
      </LanguageProvider>
    </NavigationContainer>

  );
}
