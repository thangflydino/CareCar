import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Nodata from "./../../../../Components/Nodata";

const Detail = ({description}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {!description?<Nodata title={'Chưa có thông tin'}/>:
          <Text style={styles.textDetails}>{description}</Text>}
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal:10,
  },
  textDetails:{
    fontSize:16,
    color:'#000',
    marginVertical:10,
  }
})