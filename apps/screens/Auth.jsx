import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { AccessToken, LoginButton, Settings } from 'react-native-fbsdk-next';

const Auth = () => {

  useEffect(() => {
    const requestTraking = async () => {
      const { status } = await requestTrackingPermissionsAsync();

      Settings.initializeSDK();

      if(status === 'granted') {
        await Settings.setAdvertiserTrackingEnabled(true);
      }
    };
    requestTraking();
  }, []);
  return (
    <View className='h-full flex justify-center items-center'>
      <LoginButton 
        onLogoutFinished={() => console.log('Logged Out')}
        onLoginFinished={(error, data) => {
          console.log(error || data)
          AccessToken.getCurrentAccessToken().then((data) => console.log(data));
        }} 
      />
      <Text>Hello World</Text>
    </View>
  )
}

export default Auth;