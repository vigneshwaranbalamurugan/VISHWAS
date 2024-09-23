import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Icon name="sign-in" size={20} color="#fff" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Icon name="user-plus" size={20} color="#fff" />
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#41be5a',
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 5,
      },
});

export default Footer;
