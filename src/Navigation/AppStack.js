import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./../Screens/Auth/Login";
import Register from "./../Screens/Auth/Register";
import Home from "./../Screens/Home/Home";
import ConfirmPhoneNumber from "./../Screens/Auth/ConfirmPhoneNumber";
import ForgotPassword from "./../Screens/Auth/ForgotPassword";
import SearchGarage from "./../Screens/Home/SearchGarage/SearchGarage";
import DetailGarage from "./../Screens/Home/DetailGarage/DetailGarage";
import Settings from "./../Screens/Settings/Settings";
import Appointment from "./../Screens/Appointment/Appointment";
import Chat from "./../Screens/Chat/Chat";
import Icon from 'react-native-vector-icons/Ionicons';
import QRCode from "./../Screens/QRCode/QRCode";
import UpdateName from "./../Screens/Settings/UpdateName/UpdateName";
import UpdateAddress from "./../Screens/Settings/UpdateAddress/UpdateAddress";
import ChangePassword from "./../Screens/Settings/ChangePassword/ChangePassword";
import WriteReview from "./../Screens/Home/DetailGarage/WriteReview/WriteReview";
import MakeAnAppointment from "./../Screens/Home/MakeAnAppointment/MakeAnAppointment";
import ChoiceGarage from "./../Screens/Home/MakeAnAppointment/ChoiceGarage/ChoiceGarage";
import ChoiceDate from "./../Screens/Home/MakeAnAppointment/ChoiceDate/ChoiceDate";
import ChoiceLocation from "./../Screens/Home/ChoiceLocation/ChoiceLocation";
import Message from "./../Screens/Chat/Message";
import CallForHelp from "./../Screens/Home/CallForHelp/CallForHelp";
import Voucher from "./../Screens/Home/Voucher/Voucher";
import DetailVoucher from "./../Screens/Home/Voucher/DetailVoucher/DetailVoucher";
import CarWash from "./../Screens/Home/CarWash/CarWash";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function MyTabs() {
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
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
       initialRouteName="MyTabs"
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SearchGarage" component={SearchGarage} />
      <Stack.Screen name="DetailGarage" component={DetailGarage} />
      <Stack.Screen name="UpdateName" component={UpdateName} />
      <Stack.Screen name="UpdateAddress" component={UpdateAddress} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="WriteReview" component={WriteReview} />
      <Stack.Screen name="MakeAnAppointment" component={MakeAnAppointment} />
      <Stack.Screen name="ChoiceGarage" component={ChoiceGarage} />
      <Stack.Screen name="ChoiceDate" component={ChoiceDate} />
      <Stack.Screen name="ChoiceLocation" component={ChoiceLocation} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="CallForHelp" component={CallForHelp} />
      <Stack.Screen name="Voucher" component={Voucher} />
      <Stack.Screen name="DetailVoucher" component={DetailVoucher} />
      <Stack.Screen name="CarWash" component={CarWash} />
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})