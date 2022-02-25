import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./../Authentication/Login";
import Register from "./../Authentication/Register";
import Constant from '../../controller/Constant';
import ConfirmPhoneNumber from "./../Authentication/ConfirmPhoneNumber";
import ForgotPassword from "./../Authentication/ForgotPassword";
import TabBarNavigation from "./TabBarNavigation";
import SearchGarage from "./../Home/SearchGarage/SearchGarage";
import DetailGarage from "./../Home/DetailGarage/DetailGarage";
import UpdateName from "./../Settings/UpdateName/UpdateName";
import UpdateAddress from "./../Settings/UpdateAddress/UpdateAddress";
import ChangePassword from "./../Settings/ChangePassword/ChangePassword";
import WriteReview from "./../Home/DetailGarage/WriteReview/WriteReview";
import MakeAnAppointment from "./../Home/MakeAnAppointment/MakeAnAppointment";
import ChoiceGarage from "./../Home/MakeAnAppointment/ChoiceGarage/ChoiceGarage";
import ChoiceDate from "./../Home/MakeAnAppointment/ChoiceDate/ChoiceDate";
import ChoiceLocation from "./../Home/ChoiceLocation/ChoiceLocation";
import Message from "./../Chat/Message/Message";
import CallForHelp from "./../Home/CallForHelp/CallForHelp";
import Voucher from "./../Home/Voucher/Voucher";
import DetailVoucher from "./../Home/Voucher/DetailVoucher/DetailVoucher";
import CarWash from "./../Home/CarWash/CarWash";
import ChoiceProvince from "./../Settings/UpdateAddress/ChoiceProvince/ChoiceProvince";
import ChoiceDistrict from "./../Settings/UpdateAddress/ChoiceDistrict/ChoiceDistrict";
import DataSearch from "./../Home/SearchGarage/DataSearch";
import SplashScreen from "./../SplashScreen/SplashScreen";
const Stack = createNativeStackNavigator();
import {useDispatch} from 'react-redux'
import {setUser} from '../../redux/userSlice'
import StorageManager from "./../../controller/StorageManager";
const RootNavigation = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    StorageManager.getDataUser().then((res) => {
      dispatch(setUser(res))
    })
    setTimeout(() => {
        setIsLoading(false)
    },1000)
  }, [])
  return (
    isLoading?<SplashScreen/>:
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="TabBarNavigation"
          >
            <Stack.Screen name={Constant.screenName.TabBar} component={TabBarNavigation} />
            <Stack.Screen name={Constant.screenName.Login} component={Login} />
            <Stack.Screen name={Constant.screenName.Register} component={Register} />
            <Stack.Screen name={Constant.screenName.ConfirmPhoneNumber} component={ConfirmPhoneNumber} />
            <Stack.Screen name={Constant.screenName.ForgotPassword} component={ForgotPassword} />
            <Stack.Screen name={Constant.screenName.SearchGarage} component={SearchGarage} />
            <Stack.Screen name={Constant.screenName.DetailGarage} component={DetailGarage} />
            <Stack.Screen name={Constant.screenName.UpdateName} component={UpdateName} />
            <Stack.Screen name={Constant.screenName.UpdateAddress} component={UpdateAddress} />
            <Stack.Screen name={Constant.screenName.ChangePassword} component={ChangePassword} />
            <Stack.Screen name={Constant.screenName.WriteReview} component={WriteReview} />
            <Stack.Screen name={Constant.screenName.MakeAnAppointment} component={MakeAnAppointment} />
            <Stack.Screen name={Constant.screenName.ChoiceGarage} component={ChoiceGarage} />
            <Stack.Screen name={Constant.screenName.ChoiceDate} component={ChoiceDate} />
            <Stack.Screen name={Constant.screenName.ChoiceLocation} component={ChoiceLocation} />
            <Stack.Screen name={Constant.screenName.Message} component={Message} />
            <Stack.Screen name={Constant.screenName.CallForHelp} component={CallForHelp} />
            <Stack.Screen name={Constant.screenName.Voucher} component={Voucher} />
            <Stack.Screen name={Constant.screenName.DetailVoucher} component={DetailVoucher} />
            <Stack.Screen name={Constant.screenName.CarWash} component={CarWash} />
            <Stack.Screen name={Constant.screenName.ChoiceProvince} component={ChoiceProvince} />
            <Stack.Screen name={Constant.screenName.ChoiceDistrict} component={ChoiceDistrict} />
            <Stack.Screen name={Constant.screenName.DataSearch} component={DataSearch} /> 
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})