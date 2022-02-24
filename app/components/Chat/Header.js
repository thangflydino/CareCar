import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Chat</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    padding:14,
    backgroundColor:'white',
    borderBottomWidth: 1,
    borderBottomColor:'#ddd',
    elevation:2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  }
})