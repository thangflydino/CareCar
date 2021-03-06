import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Header = ({name}) => {
  const [valueSearch, setValueSearch] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>navigation.goBack()}
      >
        <Icon name="arrow-back-outline" size={30} color="red" />
      </TouchableOpacity>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <TouchableOpacity
        onPress={() =>{}}
      >
        <Icon name="share-social-outline" size={30} color="red" />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  }
})