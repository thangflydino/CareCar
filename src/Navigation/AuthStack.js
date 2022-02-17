import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./../Screens/Auth/Login";
import Register from "./../Screens/Auth/Register";
import Home from "./../Screens/Home/Home";
import ConfirmPhoneNumber from "./../Screens/Auth/ConfirmPhoneNumber";
import ForgotPassword from "./../Screens/Auth/ForgotPassword";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
       initialRouteName="Home"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})