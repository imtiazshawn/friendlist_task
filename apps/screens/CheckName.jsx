import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

const CheckName = () => {
  const handleFacebookLogin = async () => {
    try {
      const response = await fetch('https://graph.facebook.com/me?fields=id,name&access_token=EAAFoqnX4KscBO26Di5KNdvINx5aiHfSIwzDC7dfAOpsCg7C8MvYAQ11gr5K8LDLK79BZCvD2t2n7QFKUwUILgVWkZCrIdLiYzy3GDpHSXzEX8O7FjXnPn7bJGaKo8AZCL5V6ivwurx7uDN4ER4ykhPCf9j8GbZAlIXgXZCYqPoDeVpw56QPTu60lGfAZDZD');
      const data = await response.json();

      Alert.alert('Welcome', `Hello, ${data.name}!`);

    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <TouchableOpacity style={{ backgroundColor: '#3498db', padding: 10, margin: 10 }} onPress={handleFacebookLogin}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Login With Facebook</Text>
    </TouchableOpacity>
  );
};

export default CheckName;