import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const ItemRoomChat = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.item}
      onPress={() =>navigation.navigate('Message')}
    >
      <Image style={styles.image} source={{uri:'https://images6.alphacoders.com/740/thumb-1920-740310.jpg'}}/>
      <View style={styles.contentMessage}>
        <Text style={styles.nameGarage}>
          Shinwa Pro Garage
        </Text>
        <Text style={styles.lastMessage}>
          Hello Shiro
        </Text>
      </View>
      <Text style={styles.timeLastMessage}>16:40</Text>
    </TouchableOpacity>
  )
}

export default ItemRoomChat

const styles = StyleSheet.create({
  item:{
    paddingVertical:10,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    borderBottomWidth: 0.4,
    borderBottomColor:'gray'
  },
  image:{
    width:50,
    height:50,
    borderRadius:40,
  },
  contentMessage:{
    flex:1,
    marginLeft:10,
  },
  nameGarage:{
    fontSize:16,
    color:'black',
  },
  lastMessage:{
    fontSize:14,
    color:'gray',
  },
  timeLastMessage:{
    fontSize:12,
  }
})