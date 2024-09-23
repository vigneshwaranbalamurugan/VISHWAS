import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Vishwas</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#41be5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop:'5%',
    color: '#fff',
    fontSize: 30,
  },
});

export default Header;
