import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Header from './Header'
import ItemRoomChat from './ItemRoomChat'
const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item,index }) =>
          <ItemRoomChat/>
        }
        keyExtractor={item => item}
        />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})