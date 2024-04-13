import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/**
 * @author  Ankit D Trital
 * @function @FancyCard
 **/

const FancyCard = () => {
  const {
    headingText,
    card,
    cardElevated,
    cardImage,
    cardBody,
    cardTitle,
    cardLabel,
    cardDescription,
    cardFooter,
  } = styles;
  return (
    <View>
      <Text style={headingText}>Trending Places</Text>
      <View style={[card, cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          resizeMode="cover"
          style={cardImage}
        />
        <View style={cardBody}>
          <Text style={cardTitle}>Hawa Mahal</Text>
          <Text style={cardLabel}>Itahari, Sunsari</Text>
          <Text style={cardDescription}>
            The hawa mahal is a palace in the city of Jaipur, India. But from
            the red and pink sandstone, it is on the edge of the city. This
            place is very intresting for the tourists.
          </Text>
          <Text style={cardFooter}>12 Mins Away</Text>
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
  card: {
    margin: 10,
    backgroundColor: '#7B8788',
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
  },
  cardImage: {
    height: 180,
    marginBottom: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 6,
    color: '#242B2E',
    flexShrink: 1,
  },
  cardFooter: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#242B2E',
  },
});

export default FancyCard;
