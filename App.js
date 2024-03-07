import { View } from 'react-native';
import LoginScreen from './apps/screens/LoginScreen';
import CheckName from './apps/screens/CheckName';
// import { NavigationContainer } from '@react-navigation/native';
import Auth from './apps/screens/Auth';

export default function App() {
  return (
      <View>
        {/* <LoginScreen /> */}
        <CheckName />
        {/* <Auth /> */}
      </View>
  );
}