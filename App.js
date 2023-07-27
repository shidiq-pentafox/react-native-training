import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './screens/Discover';
import DiscoverDetails from './screens/DiscoverDetails';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ComponentLooping' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DiscoverPage" component={Discover}  />
        <Stack.Screen name="DiscoverDetails" component={DiscoverDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
