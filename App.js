
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


const App: () => React$Node = () => {

  // STATES
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }
  const restartGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(false);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onRestart={restartGameHandler}
              />
  }
  return (
    <>
      <View style={styles.screen}>
        <Header title="Guess a number" />
        {content}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
