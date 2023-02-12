import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AllTasks from "../components/all-tasks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TASK } from "../constants/data/task";
import Tasks from "../components/tasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";

const Tab = createBottomTabNavigator();

const TaskNavigator = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(TASK);

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    const idMax = Math.max(...tasks.map((task) => task.id));
    setTasks([
      ...tasks,
      {
        id: idMax + 1,
        value: task,
        isTaskFinished: false,
      },
    ]);
    setTask("");
  };

  const onHandlerPress = (item) => {
    setTasks(
      tasks.map((task) =>
        task.id === item.id
          ? { ...task, isTaskFinished: !item.isTaskFinished }
          : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { backgroundColor: item.isTaskFinished ? "#a6a6a6" : "#000" },
      ]}
      onPress={() => onHandlerPress(item)}
    >
      <Text
        style={[
          styles.itemList,
          { textDecorationLine: item.isTaskFinished ? "line-through" : "none" },
        ]}
      >
        {item.value}
      </Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id.toString();

  const filteredTask = (boolValue) => tasks.filter((task) => task.isTaskFinished === boolValue);


  return (
    <Tab.Navigator initialRouteName="All">
      <Tab.Screen
        name="All"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} />
          ),
          headerShown: false,
        }}
      >
        {() => (
          <AllTasks
            task={task}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onHandlerSubmit={onHandlerSubmit}
            onHandlerChange={onHandlerChange}
            filteredTask={tasks}
            text={'There are no tasks'}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="TasksToDo"
        options={{
          title: "Tasks to do",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "square" : "square-outline"} size={22} />
          ),
        }}
      >
        {() => (
          <Tasks
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          filteredTask={filteredTask(false)}
          text={'There are no tasks done'}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="TasksDone"
        options={{
          title: "Tasks Done",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "checkbox" : "checkbox-outline"}
              size={22}
            />
          ),
        }}
      >
        {() => (
          <Tasks
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            filteredTask={filteredTask(true)}
            text={'There are no tasks to do'}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TaskNavigator;
