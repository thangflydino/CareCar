import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Nodata = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textNodata}>
          {title|| 'Không có dữ liệu'}
        </Text>
    </View>
  )
}

export default Nodata

const styles = StyleSheet.create({
  container:{
    flex: 1,
    minHeight:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNodata:{
    fontSize:18,
    color: '#000'
  }
  
})