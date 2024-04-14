import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

/**
 * @author   Ankit D Trital
 * @function @ContactList
 **/

export const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  const {
    headingText,
    container,
    contactImage,
    contactCard,
    contactName,
    contactStatus,
  } = styles;
  return (
    <View>
      <Text style={headingText}>Contact List</Text>
      <ScrollView style={container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={contactCard}>
            <Image source={{uri: imageUrl}} style={contactImage} />
            <View>
              <Text style={contactName}>{name}</Text>
              <Text style={contactStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  container: {
    padding: 10,
    marginBottom: 10,
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#8D3DAF',
    marginVertical: 2,
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  contactStatus: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default ContactList;
