import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from "./src/Screens/Auth/Login";
import Routes from "./src/Navigation/Routes";
import Geocoder from 'react-native-geocoding';
import { LogBox } from "react-native";
import Providers from "./src/Navigation/index";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const App = () => {
  return (
   <Providers/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})