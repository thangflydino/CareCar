import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from "./src/Screens/Auth/Login";
import Routes from "./src/Navigation/Routes";

const App = () => {
  return (
    <Routes/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})