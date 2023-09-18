import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig'


const ProfileScreen = () => {

  const navigation = useNavigation();



  return (
    <SafeAreaView style={styles.container}>
      <Text>I am the profile</Text>
      <Button title='Log out' onPress={() => {
        FIREBASE_AUTH.signOut()
          .then(() => {
            console.log('Logged out')
            alert('Logged out')
            navigation.navigate('Login')
          })
      }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#67C1F3',
  },
})
export default ProfileScreen