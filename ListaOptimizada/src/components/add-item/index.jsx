import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const AddItem = ({
  placeholder,
  task,
  onHandlerChange,
  onHandlerSubmit,
  buttonColor,
  buttonText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect={false}
        value={task}
        onChangeText={onHandlerChange}
      />
      <Button
        disabled={!task}
        title={buttonText}
        color={buttonColor}
        onPress={onHandlerSubmit}
      />
    </View>
  );
};

export default AddItem
