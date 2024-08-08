import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text } from 'react-native';

const marketData = [
  { id: '1', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '2', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '3', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '4', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '5', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '6', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '7', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '8', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
  { id: '9', image: 'https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_1280.jpg' },
];

const numColumns = 3;
const padding = 1;
const size = (Dimensions.get('window').width / numColumns) - (padding * 2);

const MarketPostsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={marketData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: size,
    height: size,
    margin: padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  price: {
    position: 'absolute',
    bottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});

export default MarketPostsScreen;