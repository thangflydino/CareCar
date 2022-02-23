import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import AuthAPIs from "./../../../Api/AuthAPIs";
import StorageManager from "./../../../Api/StorageManager";
const UpdateName = ({route}) => {
  const [name, setName] = useState(route?.params.name||'')
  const [dataUser, setDataUser] = useState({})
  const navigation = useNavigation()
  useEffect(() => {
    StorageManager.getDataUser().then((dataUser) => {
      setDataUser(dataUser)
      console.log('dataUser',dataUser)
    })
  },[])
  const handleOnSave =() => {
    const data ={
      name: name
    }
    AuthAPIs.updateProfile(data,dataUser).then((res) => {
       StorageManager.setDataUser({
         ...dataUser, user:{...dataUser?.user,...res}
       })
       navigation.goBack()
    })

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
                  <Icon name="ios-arrow-back" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Cập nhật thông tin</Text>
        <TouchableOpacity style={styles.btnSave}
          onPress={() =>handleOnSave()}
        >
          <Text style={styles.textSave}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Họ tên</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                />
      </View>
    </View>
  )
}

export default UpdateName

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,backgroundColor:'white'
  },
  textHeader:{
    fontSize:18,
    fontWeight:'bold',
    color:'red'
  },
  textSave:{
    color:'red',
    fontSize:18,
    marginRight:10,
  },
  body: {
    flex: 1,
    padding:10,
  },
  title: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    fontSize: 16,
  },
})