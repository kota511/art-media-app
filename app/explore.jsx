import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const data = [
];

const numColumns = 1;
const padding = 1;
const size = 1;

const ExploreScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={data}
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
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ExploreScreen;