import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { useNavigation } from '@react-navigation/native'



const SignupScreen = () => {

  const navigation = useNavigation()
  const auth = FIREBASE_AUTH

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      alert('Check your email!')
    } catch (error) {
      console.log(error)
      alert('Sign up failed, user already exists')
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.backcontainer}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.background} />
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <Text style={styles.title}>b</Text>
        </TouchableOpacity>

        <View>
          <TextInput autoCorrect={false} autoComplete='email' inputMode='email' style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput autoCorrect={false} secureTextEntry={true} style={styles.input} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
        </View>
        {loading ? <ActivityIndicator style={{ margin: 20 }} size='large' color='#67C1F3' />
          :
          <View>
            <TouchableOpacity style={styles.logButton} onPress={() => {
              signUp()
              navigation.navigate('Login')
            }} >
              <Text style={styles.button}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton} onPress={navigation.navigate('Login')} >
              <Text style={styles.button}>Go back</Text>
            </TouchableOpacity>
          </View>
        }

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

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
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    height: 42,
    width: 320,
    backgroundColor: '#fbe0e0',
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
    height: 42,
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
    height: 42,
    width: 320,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#d6e6ff'
  },
  background: {
    top: 0,
    height: 480,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fbe0e0'
  },
})

export default SignupScreen