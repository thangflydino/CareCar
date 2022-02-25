import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LogBox } from "react-native";
import RootNavigation from "./app/components/Navigation/RootNavigation";
RootNavigation
import { Provider } from 'react-redux';
import store from './app/redux/store';
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})