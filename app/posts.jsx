import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const data = [
  { id: '1', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '2', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '4', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '3', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '5', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '6', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '7', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '8', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
  { id: '9', image: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_1280.jpg' },
];

const numColumns = 3;
const padding = 1;
const size = (Dimensions.get('window').width / numColumns) - (padding * 2);

const PostsScreen = () => {
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

export default PostsScreen;