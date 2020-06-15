
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


const courseGoal: () => React$Node = () => {

  // STATES
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  console.log(courseGoals);


  const addGoalHandler = (goalTitle) => {
    setCourseGoals( currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);

    setShowModal(currentState => !currentState);
  }

  const modalHandler = (status) => {
    setShowModal(status);
  }


  const deleteGoalHandler = (goalKey) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.key != goalKey);
    });
  }

  return (
    <>
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={()=> setShowModal(true)} />
        <GoalInput onModal={modalHandler} onShowModal={showModal} onAddGoal={addGoalHandler}  />

        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courseGoals}
          renderItem={ itemData => <GoalItem
              goalKey={itemData.item.key}
              value={itemData.item.value}
              onDeleteGoal={deleteGoalHandler}
            /> }
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});

export default courseGoal;
