import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
const ChangePassword = () => {
  const navigation = useNavigation();
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')
  const [rePasswordNew, setRePasswordNew] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
                  <Icon name="ios-arrow-back" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Thay đổi mật khẩu</Text>
        <View/>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Mật khẩu cũ</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setPasswordOld}
                  value={passwordOld}
                />
        <Text style={styles.title}>Mật khẩu mới</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setPasswordNew}
                  value={passwordNew}
                />
        <Text style={styles.title}>Xác nhận mật khẩu mới</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setRePasswordNew}
                  value={rePasswordNew}
                />
      </View>
      <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.textSave}>Đặt lại</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChangePassword

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
  btnSave:{
    backgroundColor:'red',
    padding:10,
    margin:10,
    marginVertical:20,
    borderRadius:10,
  },
  textSave:{
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  }
})