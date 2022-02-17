import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Detail from './Detail/Detail';
import Evaluate from './Evaluate/Evaluate';
import Service from "./Service/Service";
import Appointment from "./Appointment/Appointment";

const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Rating"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'red'},
        tabBarStyle: {backgroundColor: 'white'},
        swipeEnabled:false,
      }}>
      <Tab.Screen name="Detail" component={Detail}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Thông tin
            </Text>
          ),
        }}/>
      <Tab.Screen name="Service" component={Service}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Dịch vụ
            </Text>
          ),
        }}/>
        <Tab.Screen name="Appointment" component={Appointment}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Lịch hẹn
            </Text>
          ),
        }}/>
      <Tab.Screen name="Evaluate" component={Evaluate}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? 'red' : 'black',
              }}>
              Đánh giá
            </Text>
          ),
        }}/>
        
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({});
