import React from 'react';
import { View, Text, Button, StyleSheet ,StatusBar,Switch} from 'react-native';
import { useMode } from './context'; // นำเข้า Context

 export default  function Dark({ navigation }) {
  const { isDarkMode, toggleDarkMode } = useMode(); // ใช้ Context

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{isDarkMode ? 'Dark-content' : 'Light-content'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />
    </View>
  );
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
