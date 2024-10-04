import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Platform } from 'react-native';
import AddGoal from './Components/AddGoal';
import ViewGoals from './Components/ViewGoals';
import { useState } from 'react';
export default function App() {
  const [Goals, setGoals] = useState([])
  const [visible, setVisible] = useState(true)
  function addNewGoal(newGoal) {
    setGoals(prevGoals => {
      return prevGoals.concat({
        id: Math.random(),
        Goal: newGoal,
      })
    })
  }
  function viewCurrentGoals() {
    setVisible(false)
  }
  function deleteGoal(id) {
    setGoals(prevGoals => {
      return prevGoals.filter(Goal => Goal.id !== id);
    })
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <AddGoal addNewGoal={addNewGoal} viewCurrentGoals={viewCurrentGoals} visible={visible} />
        <View style={styles.Goals}>
          <ViewGoals listOfGoals={Goals} deleteGoal={deleteGoal} />
        </View>
        <View style={styles.Btn}>
          <Button title='Add new Goal' color={Platform.OS === 'ios' ? 'white' : '#a065ec'} onPress={() => setVisible(true)}></Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50
  },
  Goals: {
    flex: 5,
  },
  Btn: {
    width: '50%',
    borderRadius: 6,
    marginHorizontal: 'auto',
    backgroundColor: '#a065ec'
  }
});
