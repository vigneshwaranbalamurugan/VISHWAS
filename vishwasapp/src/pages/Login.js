import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import LoginImage from '../../assets/farmer1.png';
import { loginFarmer } from '../api/login';

const Login = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const data = await loginFarmer(formData);
            Alert.alert("Login Successful");
        } catch (error) {
            Alert.alert(error.message);
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={LoginImage} style={styles.image} />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Sign In</Text>

                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    keyboardType="phone-pad"
                    value={formData.mobileNumber}
                    onChangeText={(value) => handleChange('mobileNumber', value)}
                    maxLength={10}
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    value={formData.password}
                    onChangeText={(value) => handleChange('password', value)}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupLink}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    formContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: '#6200ea',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupLink: {
        marginTop: 20,
        color: '#6200ea',
        textAlign: 'center',
    },
});

export default Login;