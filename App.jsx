import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
const App = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  button: {
    backgroundColor: "#bbb",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 1,
    shadowOpacity: 1
  },
  success:{
    backgroundColor:"green"
  },
  primary:{
    backgroundColor:"blue"
  },
  warning:{
    backgroundColor:"gold"
  },
  error:{
    backgroundColor:"red"
  }

})
export default App
