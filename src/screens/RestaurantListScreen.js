import React, { useEffect, useState, useCallback } from 'react'
import {
     Text,
     View,
     ScrollView,
     RefreshControl,
     ActivityIndicator,
} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'

import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

function RestaurantList() {
     const [restaurants, setRestaurants] = useState()
     const [refreshing, setRefreshing] = useState(false)

     useEffect(() => {
          fetch('https://bocacode-intranet-api.web.app/restaurants')
               .then(response => response.json())
               .then(data => setRestaurants(data))
               .catch(alert)
     }, [restaurants])

     const onRefresh = useCallback(() => {
          setRefreshing(true)
          withSafeAreaInsets(2000).then(() => {
               setRefreshing(false)
          })
     })

     const navigation = useNavigation()

     const goToNewRestaurant = () => {
          navigation.navigate('NewRestaurant')
     }

     return (
          <View>
               <Button
                    title="Add New Restaurant"
                    onPress={goToNewRestaurant}
                    buttonStyle={{
                         backgroundColor: '#666',
                         borderRadius: 30,
                    }}
                    containerStyle={{
                         alignSelf: 'center',
                         width: 200,
                         marginHorizontal: '50%',
                         marginVertical: 10,
                    }}
               />

               {!restaurants ? (
                    <ActivityIndicator /> 
               ) : (
                    <ScrollView
                         refreshControl={onRefresh}
                         refreshing={refreshing}
                    >
                         {restaurants.map(restaurant => {
                              return (
                                   <RestaurantCard
                                        key={restaurant.id}
                                        restaurant={restaurant}
                                   />
                              )
                         })}
                    </ScrollView>
               )}
          </View>
     )
}

export default RestaurantList
