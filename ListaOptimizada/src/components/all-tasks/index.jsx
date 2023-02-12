import AddItem from "../add-item";
import Tasks from "../tasks";
import { View } from "react-native";
import { styles } from "./styles";

const AllTasks = ({
  task,
  keyExtractor,
  renderItem,
  onHandlerSubmit,
  onHandlerChange,
  filteredTask,
  text,
}) => {
  return (
    <View style={styles.container}>
      <AddItem
        placeholder={"Add a new task"}
        task={task}
        buttonColor={"#000"}
        buttonText={"Add"}
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
      />
      <Tasks
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        filteredTask={filteredTask}
        text={text}
      />
    </View>
  );
};

export default AllTasks;
