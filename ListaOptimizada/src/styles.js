import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    listContainer: {
      marginHorizontal: 20,
      marginTop: 40
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: '#000',
      marginBottom: 10,
      borderRadius: 10,
    },
    itemList: {
      fontSize: 14,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    selectedTask: {
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      paddingVertical: 10,
      textAlign: 'center',
      marginBottom: 20,
    },
  });
