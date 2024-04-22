import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import CurrencyButton from '../../components/CurrencyButton';
import {currencyByRupee} from '../../constants/CurrencyByRupee';
import Snackbar from 'react-native-snackbar';

/**
 * @author  Ankit D Trital
 * @function @CurrencyConverter
 **/

const CurrencyConverter = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const {
    container,
    headerContainer,
    headingText,
    inputContainer,
    currencySymbol,
    inputField,
    resultContainer,
    resultText,
    buttonContainer,
    button,
    selectedStyle,
  } = styles;

  const onButtonPressed = (item: Currency) => {
    setSelectedCurrency(item.name)
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * item.value;
      const result = `${item.symbol} ${convertedAmount.toFixed(2)}`;
      setConvertedValue(result);
      setSelectedCurrency(item.name);
    } else {
      return Snackbar.show({
        text: 'Enter a valid number to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <SafeAreaView style={container}>
      <StatusBar />
      <View style={headerContainer}>
        <Text style={headingText}>Currency Converter</Text>
      </View>
      <View style={inputContainer}>
        <Text style={currencySymbol}>₹</Text>
        <TextInput
          maxLength={14}
          value={inputValue}
          onChangeText={setInputValue}
          clearButtonMode="always"
          keyboardType="number-pad"
          placeholder="Enter amount in Rupees"
          style={inputField}
        />
      </View>
      {inputValue && convertedValue && (
        <View style={resultContainer}>
          <Text style={resultText}>{convertedValue}</Text>
        </View>
      )}
      <View style={buttonContainer}>
        <FlatList
          data={currencyByRupee}
          numColumns={3}
          keyExtractor={item => item.name}
          contentContainerStyle={{gap: 15}}
          columnWrapperStyle={{gap: 10}}
          renderItem={({item}) => (
            <Pressable
              style={[button, selectedCurrency === item.name && selectedStyle]}
              onPress={() => {
                onButtonPressed(item);
              }}>
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  currencySymbol: {
    marginHorizontal: 10,
    fontSize: 28,
    fontWeight: '800',
  },
  inputField: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    width: 200,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  resultContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#fff',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selectedStyle: {
    backgroundColor: '#ffeaa7',
  },
});

export default CurrencyConverter;
