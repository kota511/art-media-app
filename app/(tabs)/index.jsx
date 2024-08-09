import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const recommendedArts = [
  { id: '1', type: 'Gothic' },
  { id: '2', type: 'Impressionism' },
  { id: '3', type: 'Abstract' },
  { id: '4', type: 'Baroque' },
  { id: '5', type: 'Renaissance' },
];

const trendingTopics = [
  { id: '1', topic: 'Modern Art' },
  { id: '2', topic: 'Abstract Art' },
  { id: '3', topic: 'Sculptures' },
];


const bottomImages = [
  { id: '1', image: require('@/assets/images/react-logo.png') },
  { id: '2', image: require('@/assets/images/splash.png') },
  { id: '3', image: require('@/assets/images/react-logo.png') },
  { id: '4', image: require('@/assets/images/splash.png') },
  { id: '5', image: require('@/assets/images/react-logo.png') },
  { id: '6', image: require('@/assets/images/splash.png') },
  { id: '7', image: require('@/assets/images/react-logo.png') },
  { id: '8', image: require('@/assets/images/splash.png') },
  { id: '9', image: require('@/assets/images/react-logo.png') },
  { id: '10', image: require('@/assets/images/splash.png') },
  { id: '11', image: require('@/assets/images/react-logo.png') },
  { id: '12', image: require('@/assets/images/splash.png') },
];


function FeedScreen() {
  const posts = [
    {
      id: '1',
      username: 'RatioJames',
      profileImage: require('@/assets/images/favicon.png'),
      postImage: require('@/assets/images/splash.png'),
      description: 'LeMansion.',
      likes: 10,
      comments: 2,
    },
    {
      id: '2',
      username: 'RatioJames1',
      profileImage: require('@/assets/images/react-logo.png'),
      postImage: require('@/assets/images/splash.png'),
      description: 'LeGoat.',
      likes: 15,
      comments: 5,
    },
    {
      id: '3',
      username: 'RatioJames2',
      profileImage: require('@/assets/images/react-logo.png'),
      postImage: require('@/assets/images/splash.png'),
      description: 'LeChef.',
      likes: 20,
      comments: 8,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={item.profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={item.postImage} style={styles.postImage} />
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>👍 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>💬 Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
}


function ExploreScreen() {
  const ArtTypeItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.type}</Text>
    </View>
  );

  const TrendingItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.topic}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Recommended Arts */}
      <View style={styles.horizontalContainer}>
        <Text style={styles.sectionTitle}>Recommended Arts</Text>
        <FlatList
          data={recommendedArts}
          renderItem={({ item }) => <ArtTypeItem item={item} />}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.horizontalListContainer}
        />
      </View>

      {/* Trending Topics */}
      <View style={styles.horizontalContainer}>
        <Text style={styles.sectionTitle}>Trending Topics</Text>
        <FlatList
          data={trendingTopics}
          renderItem={({ item }) => <TrendingItem item={item} />}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.horizontalListContainer}
        />
      </View>

      {/* Instagram-like Grid */}
      <View style={styles.bottomContainer}>
        <Text style={styles.sectionTitle}>    Hottest</Text>
        <FlatList
          data={bottomImages}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <Image source={item.image} style={styles.gridImage} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.bottomGridContainer}
        />
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
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
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 80,
  },
  horizontalContainer: {
    padding: 10,
  },
  horizontalListContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginRight: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomContainer: {
    marginTop: 20,
  },
  bottomGridContainer: {
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    margin: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  gridImage: {
    width: '100%',
    height: 100,
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
    alignItems: 'center',
  },
});








