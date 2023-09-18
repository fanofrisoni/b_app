import { SafeAreaView, Text, Button, StyleSheet, TextInput, View, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


export default LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
      alert('Sign in failed, error: ' + error.message)
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      alert('Check your email!')
    } catch (error) {
      console.log(error)
      alert('Sign up failed, error: ' + error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}>b</Text>
        <View>
          <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
          {loading ? <ActivityIndicator style={{ marginTop: 20 }} size='large' color='#FFFBF8' />
            : <>
              <Button title='Log In' onPress={signIn} />
              <Button title='Create Account' onPress={signUp} />
            </>
          }
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
//1C1414     FFFBF8       EF9FA7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#67C1F3',
  },
  input: {
    marginTop: 20,
    padding: 10,
    height: 40,
    width: 320,
    backgroundColor: '#FFFBF8',
    borderRadius: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFBF8',
  },
  logButton: {
    height: 40,
    width: 320,
    marginTop: 20,
    backgroundColor: '#EF9FA7'
  },
})