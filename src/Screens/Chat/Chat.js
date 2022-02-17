import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }
})