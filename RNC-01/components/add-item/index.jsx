import { Button, TextInput, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

export default AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    onHandlerSubmit, 
    buttonColor, 
    buttonText
}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button disabled={!task} title={buttonText} color={buttonColor} onPress={onHandlerSubmit} />
      </View>
  )
}
