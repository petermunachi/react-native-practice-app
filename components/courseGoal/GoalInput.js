import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal
} from 'react-native';

const GoalInput = (props) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);

    setEnteredGoal('');
  }

  return (
    <Modal visible={props.onShowModal} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onModal.bind(this, false)}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addGoalHandler}
            />
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    width: '40%'
  }

});
export default GoalInput;
