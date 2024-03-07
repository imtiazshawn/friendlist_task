import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '318718871219429'
  })

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(`https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`);
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
      })
    }
  }, [response])

  const handlePressAsync = async () => {
    const result = await promptAsync();

    if (result.type !== 'success') {
      alert('something went wrong!');
      return
    }

  }

  return (
    <View className='flex-1 text-white items-center justify-center'>
      {user ? (
        <Profile user={user} />
      ) : (
        <Button disabled={!request} title='Sign in With Facebook' onPress={handlePressAsync} />
      )}
    </View>
  )
};

export default LoginScreen;


function Profile ({ user }) {
  return (
    <View>
      <Image source={{ uri: user.picture.data.url}} />
      <Text>{user.name}</Text>
      <Text>{user.id}</Text>
    </View>
  )
}