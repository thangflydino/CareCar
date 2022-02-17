import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./AppStack";
const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})