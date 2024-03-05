import { View } from 'react-native';
// import HomeScreen from './apps/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './apps/screens/LoginScreen';

export default function App() {
  return (
    <View className='flex-1 text-white items-center justify-center'>
      <StatusBar style="dark" />
      {/* <HomeScreen /> */}
      <LoginScreen />
    </View>
  );
}
