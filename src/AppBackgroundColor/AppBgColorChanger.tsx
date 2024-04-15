import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

/**
 * @author  Ankit D Trital
 * @function @AppBgColorChanger
 **/

const AppBgColorChanger = () => {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');
  const {container, buttonView, buttonText} = styles;
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor} />
      <View style={[container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={buttonView}>
            <Text style={buttonText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonView: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#6A1B4D',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default AppBgColorChanger;
