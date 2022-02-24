import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Booked from "./Booked/Booked";
import Complete from "./Complete/Complete";
import Canceled from "./Canceled/Canceled";

const Tab = createMaterialTopTabNavigator();
const TabAppointment = () => {
  return (
    <Tab.Navigator
      initialRouteName="Evaluate"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'red'},
        tabBarStyle: {backgroundColor: 'white'},
        swipeEnabled:false,
      }}>
      <Tab.Screen name="Booked" component={Booked}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Đã đặt
            </Text>
          ),
        }}/>
      <Tab.Screen name="Complete" component={Complete}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Hoàn thành
            </Text>
          ),
        }}/>
        <Tab.Screen name="Canceled" component={Canceled}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Đã huỷ
            </Text>
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default TabAppointment;

const styles = StyleSheet.create({});
