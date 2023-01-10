import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput style={ styles.input } placeholder='add a new task'/>
          <Button title='Add' color='#cc909e'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efa8b8',
  },
  inputContainer: {
    marginTop: 35,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderBottomColor: '#cc909e',
    borderBottomWidth: 1,
    color: '#212121',
    height: 40,
  }
});
