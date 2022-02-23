import { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantList from './src/components/RestaurantList';
import Details from './src/components/Details';

const Stack = createNativeStackNavigator();
export const RestaurantContext = createContext();

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  return (
    <NavigationContainer>
      <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={RestaurantList} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </RestaurantContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
