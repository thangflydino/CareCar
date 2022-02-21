import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from "./src/Screens/Auth/Login";
import Routes from "./src/Navigation/Routes";
import Geocoder from 'react-native-geocoding';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
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