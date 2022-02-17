import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Service = () => {
  const listService=[
    {
      name:'Gọi cứu hộ',
      description:'- Rửa xe, rửa gầm, hút bụi Rửa xe, rửa gầm, hút bụi',
    },
    {
      name:'Sửa chữa bảo dưởng ô tô',
      description:'- Rửa xe, rửa gầm, hút bụi Rửa xe, rửa gầm, hút bụi',
    },
    {
      name:'Đồng sơn ô tô',
      description:'- Rửa xe, rửa gầm, hút bụi Rửa xe, rửa gầm, hút bụi',
    }
  ]
  return (
    <View style={styles.container}>
      {
        listService.map((item,index)=>(
          <TouchableOpacity style={styles.item} key={item.name}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  item:{
    marginTop: 10,
        backgroundColor: '#fff',
        elevation: 3,
        padding:10,
        margin:10,
        marginBottom:0,
        borderRadius:10,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    color: 'black'
  },
  description:{
    fontSize:14,
    color: 'gray'
  }
})