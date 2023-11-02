import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = ({ isDarkMode, changeLanguage }) => {
  const { language } = useLanguage('');

  return (
    <View style={[styles.container, isDarkMode]}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>เลือกภาษา</Text>
      <View style={styles.horizontalElement}>
        <TouchableOpacity onPress={() => changeLanguage('th')}>
          <Text style={[styles.languageText, language === 'th' && styles.selectedText, isDarkMode && styles.darkText]}>ไทย </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text style={[styles.languageText, language === 'en' && styles.selectedText, isDarkMode && styles.darkText]}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  horizontalElement: {
    flexDirection: 'row', // ทำให้องค์ประกอบเรียงตัวกันแนวนอน
    alignItems: 'center', // จัดให้องค์ประกอบกลายเป็นตรงกลางในแนวนอน
    top: 10
  },
  container: {
    position: 'absolute',
    left: 100,
  },
  languageText: {
    color: 'black', // สีข้อความเริ่มต้น
    textDecorationLine: 'none', // ไม่มีขีดเส้นใต้คำ
  },
  selectedText: {
    textDecorationLine: 'underline', // มีขีดเส้นใต้คำเมื่อถูกเลือก
  },
  darkText: {
    color: '#fff', // สีข้อความสำหรับโหมดมืด
  },
});

export default LanguageSwitcher;
