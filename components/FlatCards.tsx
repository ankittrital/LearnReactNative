import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author    Ankit D Trital
 * @function @FlatCards
 **/

const FlatCard = () => {
  const {headingText, container, card, cardOne, cardTwo, cardThree} = styles;
  return (
    <View>
      <Text style={headingText}>Flat Cards</Text>
      <View style={container}>
        <View style={[card, cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[card, cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[card, cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[card, cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {backgroundColor: '#EF5354'},
  cardTwo: {backgroundColor: '#50DBB4'},
  cardThree: {backgroundColor: '#5DA3fA'},
});

export default FlatCard;
