import React, {PropsWithChildren, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import {trigger} from 'react-native-haptic-feedback';

import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';

/**
 * @author  Ankit D Trital
 * @function @HapticFeedbackAndImages
 **/

type DiceProps = PropsWithChildren<{
  // ! ImageSourcePropType will only accept image and not other url's or something.
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
const HapticFeedbackAndImages = (): React.JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const {container, rollDiceBtnText} = styles;

  const rollDiceOnTap = () => {
    // Adding 1 at last to not get 0 as random number
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    trigger('impactHeavy', options);
  };
  return (
    <View style={container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#8EA7E9',
    borderColor: '#E5E0FF',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default HapticFeedbackAndImages;
