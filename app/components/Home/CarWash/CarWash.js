import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Header from './Header'
import { Dimensions } from "react-native";
import Constant from "./../../../controller/Constant";
const CarWash = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Image source={Constant.icons.nodata} style={styles.image} />
      </View>
    </View>
  )
}

export default CarWash
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  image:{
    width:width,
    height:width,
    resizeMode: 'contain',
  }
})