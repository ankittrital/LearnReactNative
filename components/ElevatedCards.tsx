import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

/**
 * @author   Ankit D Trital
 * @function @ElevatedCards
 **/

const ElevatedCards = () => {
  const {headingText, scrollContainer, card, cardElevated} = styles;
  return (
    <View>
      <Text style={headingText}>Scrollable Cards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={scrollContainer}>
        <View style={[card, cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[card, cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[card, cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[card, cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[card, cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[card, cardElevated]}>
          <Text>hehe</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  scrollContainer: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#EF5',
  },
});

export default ElevatedCards;
