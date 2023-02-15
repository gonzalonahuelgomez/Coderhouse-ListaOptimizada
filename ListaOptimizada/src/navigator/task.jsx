import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { addTask, toggleTask } from "../store/task.action";
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
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const onHandlerPress = (item) => {
    dispatch(toggleTask(item));
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

  const filteredTask = (filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter((t) => t.isTaskFinished);
      case "SHOW_ACTIVE":
        return todos.filter((t) => !t.isTaskFinished);
    }
  };

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
            filteredTask={filteredTask("SHOW_ALL")}
            text={"There are no tasks"}
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
            filteredTask={filteredTask("SHOW_ACTIVE")}
            text={"There are no tasks to do"}
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
            filteredTask={filteredTask("SHOW_COMPLETED")}
            text={"There are no tasks done"}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TaskNavigator;
