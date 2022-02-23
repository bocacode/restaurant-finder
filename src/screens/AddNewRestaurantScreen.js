import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function AddNewRestaurantScreen() {
     const [btnDisabled, setBtnDisabled] = useState(true)
     const [newRestaurant, setNewRestaurant] = useState({})

     const navigation = useNavigation()

     //  const newRestaurant = {
     //       address: address,
     //       name: restaurantName,
     //       numRatings: rating,
     //       photoUrl:
     //            'https://www.mycolombianrecipes.com/wp-content/uploads/2013/11/Three-Meats-Sancocho.jpg',
     //       rating: 3.75,
     //  }

     useEffect(() => {
          if (newRestaurant.address && newRestaurant.name) {
               setBtnDisabled(false)
          }
     }, [newRestaurant])

     const sendNewRestaurantInfo = () => {
          fetch('https://bocacode-intranet-api.web.app/restaurants', {
               method: 'POST',
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(newRestaurant),
          })
               .then(() => alert('New restaurant added '))
               .then(() => navigation.navigate('Home'))
               .catch(err => console.error(err))
     }

     return (
          <>
               <View>
                    <Text> this is add new restaurant screen </Text>
                    <Input
                         placeholder="Restaurant Name"
                         spellCheck
                         onChangeText={userText =>
                              setNewRestaurant({
                                   ...newRestaurant,
                                   name: userText,
                              })
                         }
                    />
                    <Input
                         placeholder="Address"
                         onChangeText={text =>
                              setNewRestaurant({
                                   ...newRestaurant,
                                   address: text,
                              })
                         }
                    />
                    <Input
                         placeholder="Photo"
                         onChangeText={text =>
                              setNewRestaurant({
                                   ...newRestaurant,
                                   photo: 'https://www.mycolombianrecipes.com/wp-content/uploads/2013/11/Three-Meats-Sancocho.jpg',
                              })
                         }
                    />
                    <Input
                         placeholder="Rating"
                         keyboardType="numeric"
                         onChangeText={text =>
                              setNewRestaurant({
                                   ...newRestaurant,
                                   rating: text,
                              })
                         }
                    />
                    <Button
                         title="Create new restaurant"
                         onPress={sendNewRestaurantInfo}
                         disabled={btnDisabled}
                    />
               </View>
          </>
     )
}
