
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';


const  GoalItem = (props) => (
  
  <TouchableNativeFeedback activeOpacity={0.8} onPress={()=>props.onDeleteGoal(props.goalKey)}>
    <View style={styles.listItem}>
      <Text>{props.value}</Text>
    </View>
  </TouchableNativeFeedback>

);
const styles = StyleSheet.create({

  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }

});

export default GoalItem;
