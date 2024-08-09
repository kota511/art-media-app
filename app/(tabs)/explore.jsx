import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Sample data
const marketplaceItems = [
  { id: '1', image: require('@/assets/images/react-logo.png'), name: 'Art Piece 1', price: '$100' },
  { id: '2', image: require('@/assets/images/splash.png'), name: 'Art Piece 2', price: '$200' },
  { id: '3', image: require('@/assets/images/react-logo.png'), name: 'Art Piece 3', price: '$150' },
  { id: '4', image: require('@/assets/images/splash.png'), name: 'Art Piece 4', price: '$250' },
  { id: '5', image: require('@/assets/images/react-logo.png'), name: 'Art Piece 5', price: '$300' },
  { id: '6', image: require('@/assets/images/splash.png'), name: 'Art Piece 6', price: '$400' },
  { id: '7', image: require('@/assets/images/react-logo.png'), name: 'Art Piece 7', price: '$350' },
  { id: '8', image: require('@/assets/images/splash.png'), name: 'Art Piece 8', price: '$450' },
];

function MarketplaceScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={item.image} style={styles.gridImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Grid View */}
      <FlatList
        data={marketplaceItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

function TournamentScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.emptyText}>Tournament Screen is empty</Text>
    </View>
  );
}

// Tab Navigator
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
        <Tab.Screen name="Tournament" component={TournamentScreen} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 10,
  },
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  gridImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

