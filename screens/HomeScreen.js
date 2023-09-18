import { SafeAreaView, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>I am the Homescreen</Text>
      <Button title='Go to Profile Screen' onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  )
}

export default HomeScreen