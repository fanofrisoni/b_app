import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()

export default StackNavigator = () => {

  const user = null

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </>
      ) : (
        <Stack.Screen name='Login' component={LoginScreen} />
      )}
    </Stack.Navigator>
  )
}
