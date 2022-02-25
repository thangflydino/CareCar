import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [valueSearch, setValueSearch] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>navigation.goBack()}
      >
        <Icon name="arrow-back-outline" size={30} color="red" />
      </TouchableOpacity>
      <Text style={styles.name} numberOfLines={1}>Tỉnh/Thành Phố</Text>
      <Icon name="share-social-outline" size={30} color="transparent" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'white',
    borderBottomWidth: 1,
    borderBottomColor:'#ddd',
    elevation:2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  }
})