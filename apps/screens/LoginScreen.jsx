import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Facebook from 'expo-facebook';

const LoginScreen = () => {

  const handleFacebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '770747017911369',
      });

      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const userData = await response.json();
        console.log(userData);
      } else {
        console.log('Facebook login failed');
      }
    } catch (error) {
      console.log('Error occurred while logging in with Facebook:', error);
    }
  };

  return (
    <TouchableOpacity className='bg-sky-600 px-3 py-2' onPress={handleFacebookLogin}>
        <Text className='text-white font-bold text-lg'>Login With Facebook</Text>
      </TouchableOpacity>
  );
};

export default LoginScreen;
