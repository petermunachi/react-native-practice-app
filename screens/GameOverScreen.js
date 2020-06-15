import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import Colors from '../constants/color';

const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <Text>The Game is Over</Text>
    <Text>Number of rounds: {props.roundsNumber}</Text>
    <Text>Number was: {props.userNumber}</Text>
    <Button title="NEW GAME" onPress={onRestart} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default GameOverScreen;
