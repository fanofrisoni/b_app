import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import { FIREBASE_AUTH } from './FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'



const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

const OutsideStack = createNativeStackNavigator()

function OutsideLayout() {
  return (
    <OutsideStack.Navigator>
      <OutsideStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <OutsideStack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
    </OutsideStack.Navigator>
  )
}

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={HomeScreen} options={{ headerShown: true, headerShadowVisible: false }} />
      <InsideStack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: true, headerShadowVisible: false }} />
    </InsideStack.Navigator>
  )
}

export default StackNavigator = () => {

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
      console.log(user)
    })
  }, [])

  const [user, setUser] = useState(() => onAuthStateChanged(FIREBASE_AUTH, (user) => setUser(user)))
  //const [user, setUser] = useState(null)
  return (

    <Stack.Navigator>
      {user ? (
        <Stack.Screen name='Layout' component={InsideLayout} options={{ headerShown: false }} />
      ) : (
          <Stack.Screen name='OutsideLayout' component={OutsideLayout} options={{ headerShown: false }} />
      )}

    </Stack.Navigator>
  )
}
