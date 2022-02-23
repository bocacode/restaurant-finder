import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RestaurantContext } from '../../App';

export default function RestaurantCard({ restaurant }) {
  const { setSelectedRestaurant } = useContext(RestaurantContext);
  const navigation = useNavigation();
  const handlePress = () => {
    setSelectedRestaurant(restaurant);
    navigation.navigate('Details');
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: restaurant.photoUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{restaurant.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: 'grey',
    marginBottom: 16,
  },
  cardImage: {
    width: 350,
    height: 210,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: '600',
    padding: 4,
  }
});