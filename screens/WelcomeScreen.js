import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.firsttext}>where u wanna</Text>
      <Text style={styles.b}>b</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('OutsideLayout') }}>
        <Text style={styles.butntext}>let's start</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFBF8',
  },
  firsttext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2f2f2f',
    textAlign: 'center',
  },
  b: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#2f2f2f',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#2f2f2f',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  butntext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
})

export default WelcomeScreen