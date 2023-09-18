import { SafeAreaView, Text, Button, StyleSheet, TextInput, View, KeyboardAvoidingView, ActivityIndicator, Keyboard, TouchableOpacity } from 'react-native'
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
    <SafeAreaView style={styles.backcontainer}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <Text style={styles.title}>b</Text>
        </TouchableOpacity>

        <View>
          <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
          {loading ? <ActivityIndicator style={{ margin: 20 }} size='large' color='#67C1F3' />
            : <>
              <TouchableOpacity style={styles.logButton} onPress={signIn} >
                <Text style={styles.button}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createButton} onPress={signUp} >
                <Text style={styles.button}>Create Account</Text>
              </TouchableOpacity>
            </>
          }
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

//1C1414     FFFBF8       EF9FA7

const styles = StyleSheet.create({
  backcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFBF8',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    marginTop: 20,
    padding: 10,
    height: 50,
    width: 320,
    backgroundColor: '#Ee9Fa7',
    borderRadius: 10,
  },
  title: {
    fontSize: 58,
    fontWeight: 'bold',
    color: '#67C1F3',
  },
  logButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    width: 320,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#67C1F3'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  createButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    width: 320,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#F2fBF8'
  },
})