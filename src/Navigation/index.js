import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import SplashScreen from "./../Screens/SplashScreen/SplashScreen";
import Routes from "./Routes";

const Providers = () => {
    const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    },1000)
  }, [])
    return (
        <>
        {isLoading? <SplashScreen/>:<Routes />}
        </>
    )
}

export default Providers