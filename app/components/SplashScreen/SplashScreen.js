import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import imageS from "./../../Assets/images/Splashscreen.jpg";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={imageS} style={styles.image}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode: 'contain',
  }
})