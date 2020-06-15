import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet
} from 'react-native';

import Colors from '../constants/color';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const generateRandomBetween = (minValue, maxValue, exclude) => {
  let min = Math.ceil(minValue);
  let max = Math.floor(maxValue);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(minValue, maxValue, exclude);
  } else {
    return rndNum;
  }
}
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess,  userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Don\'t Lie', 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'}
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        </View>
        <View style={styles.button}>
          <Button title="GREATER" onPress={()=> nextGuessHandler('greater')} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    maxWidth: '80%',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: '40%',
  },
});
export default GameScreen;
