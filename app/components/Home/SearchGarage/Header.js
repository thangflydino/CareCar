import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CommonAPIs from "./../../../controller/APIs/CommonAPIs";

const Header = () => {
  const [valueSearch, setValueSearch] = useState('');
    const [listDataGarageSearch,setListDataGarageSearch] = useState([]);
  const navigation = useNavigation();
  const handleOnSearch = ()=>{
    navigation.navigate('DataSearch',{valueSearch:valueSearch})
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>navigation.goBack()}
      >
        <Icon name="chevron-back-outline" size={34} color="red" />
      </TouchableOpacity>
      <View style={styles.fromSearch}>
        <Icon name="search" size={24} color="gray" />
        <TextInput
          placeholder="Nhập tên garage hoặc dịch vụ"
          style={styles.input}
          value={valueSearch}
          onChangeText={setValueSearch}
          onSubmitEditing={handleOnSearch}
        />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fromSearch:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius:10,
  },
  input:{
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius:10,
    paddingVertical:6,
  }
})