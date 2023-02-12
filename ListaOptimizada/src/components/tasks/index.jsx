import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

const Tasks = ({ renderItem, keyExtractor, filteredTask, text }) => {
  if (filteredTask.length === 0)
    return (
      <View style={styles.containerNoTask}>
        <Text>{text}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTask}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Tasks;
