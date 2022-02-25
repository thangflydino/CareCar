import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import TabAppointment from "./TabAppointment/TabAppointment";

const Appointment = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TabAppointment/>
    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
})