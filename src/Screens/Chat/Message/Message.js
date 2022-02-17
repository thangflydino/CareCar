import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
const Message = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  }
})