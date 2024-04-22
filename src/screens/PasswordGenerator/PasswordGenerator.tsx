import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
/**
 * @author   Ankit D Trital
 * @function @PasswordGenerator
 **/

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be at least 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

const PasswordGenerator = () => {
  //Use States
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setISPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = `!@#$%^&*()_+-.::`;
    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const generatedPassword = createPassword(characterList, passwordLength);
    setPassword(generatedPassword);
    setISPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPasswordState = () => {
    setPassword('');
    setISPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const {
    container,
    formContainer,
    formTitle,
    inputContainer,
    inputStyle,
    inputTitle,
    bouncyView,
    bouncyText,
    primaryBtn,
    primaryBtnTxt,
    secondaryBtn,
    secondaryBtnTxt,
    buttonsContainer,
    errorText,
    inputColumn,
    cardContainer,
    cardElevated,
    cardTitle,
    cardDescription,
    cardResult,
  } = styles;
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={container}>
        <View style={formContainer}>
          <Text style={formTitle}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log('values', values);
              // ! This + is going to change string to number
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={inputContainer}>
                  <View style={inputColumn}>
                    <Text style={inputTitle}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={bouncyView}>
                  <Text style={bouncyText}>Include Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={bouncyView}>
                  <Text style={bouncyText}>Include Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={bouncyView}>
                  <Text style={bouncyText}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={bouncyView}>
                  <Text style={bouncyText}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
                <View style={buttonsContainer}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={primaryBtn}
                    onPress={handleSubmit}>
                    <Text style={primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated && (
          <View style={[cardContainer, cardElevated]}>
            <Text style={cardTitle}>Generated Password</Text>
            <Text style={cardDescription}>Long press to copy</Text>
            <Text selectable style={cardResult}>
              {password}
            </Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    margin: 10,
    padding: 10,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  inputContainer: {
    // backgroundColor: 'green',
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderColor: '#16213e',
    padding: 5,
    width: '30%',
    borderRadius: 4,
  },
  inputColumn: {flex: 1},
  inputTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  bouncyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  bouncyText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnTxt: {
    fontWeight: '700',
  },
  cardContainer: {
    margin: 10,
    padding: 10,
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
  cardTitle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 5,
  },
  cardResult: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#16213e',
  },
});

export default PasswordGenerator;
