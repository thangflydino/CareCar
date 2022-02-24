import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from './Header'
import CommonAPIs from "./../../../../controller/APIs/CommonAPIs";
import { Dimensions } from "react-native";
import {useNavigation}from '@react-navigation/native'
import Loading from "./../../../components/Loading";

const ChoiceProvince = () => {
  const navigation =useNavigation();
  const [listProvince,setListProvinces] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    CommonAPIs.getAllProvinces().then((res)=>{
      setListProvinces(res);
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
    })
  },[])
  return (
    <View style={styles.container}>
      <Header />
      {loading?<Loading/>:
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listProvince} >
        {
        listProvince.map((province)=>
          <TouchableOpacity style={styles.item}
            onPress={() =>navigation.navigate('UpdateAddress',{province:province})}
            key={province.id}
          >
            <Text style={styles.textItem}>{province?.name}</Text>
          </TouchableOpacity>
        )
      }
      </View>
      </ScrollView>
      }
    </View>
  )
}

export default ChoiceProvince
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  listProvince:{
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  item:{
    padding:10,
    width:width/3
  },
  textItem:{
    fontSize:16,
    color:'black'
  }
})