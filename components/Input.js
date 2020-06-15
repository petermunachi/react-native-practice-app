import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const Input = (props) => (
  <TextInput {...props} style={{...styles.input, ...props.input}}/>
);

const styles = StyleSheet.create({

  input: {
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }

});

export default Input;
