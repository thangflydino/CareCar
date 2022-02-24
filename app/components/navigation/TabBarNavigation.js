import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "./../Home/Home";
import Appointment from "./../Appointment/Appointment";
import QRCode from "./../QRCode/QRCode";
import Chat from "./../Chat/Chat";
import Settings from "./../Settings/Settings";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const TabBarNavigation = () =>{

  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={focused?'home':'home-outline'}
                size={22}
                color={'red'}
              />
              <Text style={{fontSize:10,color:'red'}}>Trang chủ</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Appointment" component={Appointment} options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={focused?'apps':'apps-outline'}
                size={22}
                color={'red'}
              />
              <Text style={{fontSize:10,color:'red'}}>Lịch hẹn</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="QRCode" component={QRCode} options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom:5,
              }}>
              <View style={
                {
                  width: 60, 
                  height: 60,
                  borderRadius:60,
                  backgroundColor:'red',justifyContent: 'center',alignItems: 'center',
                  borderWidth: 4,
                  borderColor: 'white'
                  }}>
                  <Icon
                  name={'qr-code'}
                  size={36}
                  color={'white'}
                />
              </View>
              <Text style={{fontSize:10,color:'red'}}>QR_Code</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Chat" component={Chat} options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={focused?'chatbubbles':'chatbubbles-outline'}
                size={22}
                color={'red'}
              />
              <Text style={{fontSize:10,color:'red'}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={focused?'person':'person-outline'}
                size={22}
                color={'red'}
              />
              <Text style={{fontSize:10,color:'red'}}>Tài khoản</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarNavigation

const styles = StyleSheet.create({})