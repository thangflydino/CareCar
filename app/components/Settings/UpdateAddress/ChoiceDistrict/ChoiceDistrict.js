import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from './Header'
import { Dimensions } from "react-native";
import {useNavigation}from '@react-navigation/native'
import CommonAPIs from "./../../../../controller/APIs/CommonAPIs";
import Loading from "./../../../Components/Loading";

const ChoiceDistrict = ({route}) => {
  const province = route?.params?.province; 
  const navigation =useNavigation();
  const [listDistricts,setListDistricts] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    CommonAPIs.getAllDistricts(province.id).then((res)=>{
      setListDistricts(res.data);
      setLoading(false)
      }).catch((error)=>{
        setLoading(false)
      })
  },[])
  return (
    <View style={styles.container}>
      <Header />
      {loading?<Loading/>:
      <View style={styles.listProvince}>
        {
        listDistricts.map((district)=>
          <TouchableOpacity style={styles.item}
            onPress={() =>navigation.navigate('UpdateAddress',{province:province,district:district})}
            key={district.id}
          >
            <Text style={styles.textItem}>{district?.name}</Text>
          </TouchableOpacity>
        )
      }
      </View>}
    </View>
  )
}

export default ChoiceDistrict
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