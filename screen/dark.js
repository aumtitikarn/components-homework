import React from 'react';
import { View, Text, Button, StyleSheet ,StatusBar,Switch} from 'react-native';
import { useMode } from './context'; // นำเข้า Context
import Data from '../screen/data';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

 export default  function Dark({ navigation }) {
  const { isDarkMode, toggleDarkMode } = useMode(); // ใช้ Context
  const { language, changeLanguage } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#01244f' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ left:-150}}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{isDarkMode ? 'Dark-content' : 'Light-content'}</Text>
      <Switch
        style={{left:-15}}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />
       <LanguageSwitcher isDarkMode={isDarkMode} changeLanguage={changeLanguage} />
      </View>
      <View>
      <Data isDarkMode={isDarkMode} language={language} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight
    },
  });
