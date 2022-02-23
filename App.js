import { createContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantList from './src/screens/RestaurantListScreen'
import Details from './src/screens/DetailsScreen'
import AddNewRestaurantScreen from './src/screens/AddNewRestaurantScreen'

const Stack = createNativeStackNavigator()
export const RestaurantContext = createContext()

export default function App() {
     const [selectedRestaurant, setSelectedRestaurant] = useState()
     return (
          <NavigationContainer>
               <RestaurantContext.Provider
                    value={{ selectedRestaurant, setSelectedRestaurant }}
               >
                    <Stack.Navigator>
                         <Stack.Screen name="Home" component={RestaurantList} />
                         <Stack.Screen name="Details" component={Details} />
                         <Stack.Screen
                              name="NewRestaurant"
                              component={AddNewRestaurantScreen}
                         />
                    </Stack.Navigator>
               </RestaurantContext.Provider>
               <StatusBar style="auto" />
          </NavigationContainer>
     )
}
