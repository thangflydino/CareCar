import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from './Header'
import {useNavigation } from '@react-navigation/native'
const ChoiceLocation = ({route}) => {
  const navigation = useNavigation();
  const screen = route?.params?.screen || 'Home'
  console.log('Navigation',screen)
  const handleOnClickItem =(item)=>{
    if(screen=='Home')
      navigation.navigate('Home',{location: item})
    else if(screen=='Voucher')
      navigation.navigate('Voucher',{location: item})
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listLocation}>
        {
          ['Đà Nẵng','Hà Nội'].map((item, index) => (
            <TouchableOpacity style={styles.itemLocation} key={index}
              onPress={() => handleOnClickItem(item)}
            >
              <Text style={styles.textLocation}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default ChoiceLocation

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'wq',
  },
  listLocation:{
    flexDirection: 'row',
    padding:10,
  },
  itemLocation:{
    padding:10,
  },
  textLocation:{
    fontSize: 16,
    color: 'black',
  }
})