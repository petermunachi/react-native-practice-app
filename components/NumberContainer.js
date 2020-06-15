import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import Colors from '../constants/color';


const NumberContainer = (props) => (
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22
  }
});
export default NumberContainer;
