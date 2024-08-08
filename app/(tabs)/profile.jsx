import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsScreen from '../posts';
import MarketPostsScreen from '../marketposts';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://avatar.iran.liara.run/public/boy?username=Ash" }}
          />
          <View style={styles.statsContainer}>
            <TouchableOpacity style={styles.statItem}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem}>
              <Text style={styles.statNumber}>87</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem}>
              <Text style={styles.statNumber}>112</Text>
              <Text style={styles.statLabel}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.name}>Lebron James</Text>
        <Text style={styles.bio}>example bio</Text>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.pinterest.com')}>
            <Text style={styles.link}>Pinterest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com')}>
            <Text style={styles.link}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.twitter.com')}>
            <Text style={styles.link}>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Marketplace" component={MarketPostsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    padding: 20,
    marginTop: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
    marginTop: 5,
  },
  linksContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: '#1e90ff',
    textAlign: 'left',
    marginVertical: 5,
  },
});

export default ProfileScreen;
