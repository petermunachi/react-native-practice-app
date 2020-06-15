import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/color';

const StartGameScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');


  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 || chosenNumber == '') {
      Alert.alert(
        'Invalid Number !',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
    Keyboard.dismiss();

  }
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.selectedText}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          color={Colors.primary}
          title="START GAME"
          onPress={()=> props.onStartGame(selectedNumber)}
        />
      </Card>
    )
  }

  return(
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game </Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.selectedText}>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit={true}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
            </View>

          </View>

        </Card>
        {confirmedOutput}
      </View>
    </ TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  title:{
    fontSize: 20,
    marginVertical: 10,
  },
  title2:{
  },
  inputContainer:{
    width: 300,
    maxWidth: '100%',
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '40%'
  },

  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  selectedText: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default StartGameScreen;
