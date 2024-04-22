import React, {FC} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author   Ankit D Trital
 * @function @CurrencyButton
 **/

type CurrencyProps = PropsWithChildren<{
  flag: string;
  name: string;
}>;

const CurrencyButton = ({flag, name}: CurrencyProps): JSX.Element => {
  const {container, nameStyle, flagStyle} = styles;
  return (
    <View style={container}>
      <Text style={flagStyle}>{flag}</Text>
      <Text style={nameStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: 'center',
  },
  flagStyle: {
    fontSize: 24,
    marginBottom: 4,
    color: '#ffffff'
  },
  nameStyle: {
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyButton;
