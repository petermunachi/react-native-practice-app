
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';


const CourseGoal: () => React$Node = () => {
  return (
    <>
      <View style={{padding: 30}}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TextInput
            placeholder="Course Goal"
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginBottom: 10,
              width: '70%'
            }}
          />
          <Button title="ADD" color="#ff00ff"/>
        </View>

        <View>

        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default CourseGoal;
