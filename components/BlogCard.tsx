import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

/**
 * @author   Ankit D Trital
 * @function @BlogCard
 **/

const BlogCard = () => {
  // Linking to the website

  function openWebsite(url: string) {
    Linking.openURL(url);
  }

  const {
    headingText,
    card,
    cardElevated,
    headingContainer,
    headingTitle,
    blogImage,
    blogBodyContainer,
    blogFooterContainer,
    socialLinks,
  } = styles;
  return (
    <View>
      <Text style={headingText}>Blog Card</Text>
      <View style={[card, cardElevated]}>
        <View style={headingContainer}>
          <Text style={headingTitle}>What's new in Javascript 21 - ES12 ?</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={blogImage}
        />
        <View style={blogBodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={blogFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/ankit.d.trital/')
            }>
            <Text style={socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  card: {
    margin: 10,
    backgroundColor: '#E07C24',
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 14,
  },
  cardElevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  blogImage: {
    height: 200,
  },
  blogBodyContainer: {
    textAlign: 'justify',
    padding: 10,
    color: '#242B2E',
  },
  blogFooterContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});

export default BlogCard;
