import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Routes from "./src/Navigation/Routes";
import Geocoder from 'react-native-geocoding';
import { LogBox } from "react-native";
// import Providers from "./src/Navigation/index";
import Login from "./app/components/authentication/Login";
import RootNavigation from "./app/components/navigation/RootNavigation";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const App = () => {
  return (
  //  <Providers/>
      <RootNavigation/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})