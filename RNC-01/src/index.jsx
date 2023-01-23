import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { AddItem } from '../components/index'
import { styles } from './styles'

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
        isTaskFinished: false
      }
    ]);
    setTask('');
  }

  const onHandlerPress = (item) => {
    setTasks(
      tasks.map(task => 
          task.id === item.id
          ? {...task, isTaskFinished: !item.isTaskFinished}
          : task
      )
    )
  }
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.itemContainer, {backgroundColor: item.isTaskFinished ? '#a6a6a6' : '#000'}]} 
      onPress={() => onHandlerPress(item)}>
      <Text style={[styles.itemList, {textDecorationLine: item.isTaskFinished ? 'line-through' : 'none'}]}>
        {item.value}
      </Text>
    </TouchableOpacity>
  )
  
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <AddItem placeholder={'Add a new task'} task={task} buttonColor={'#000'} buttonText={'Add'} onHandlerChange={onHandlerChange} onHandlerSubmit={onHandlerSubmit} />  
      <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}        
      />      
    </View>
  );
}

export default App