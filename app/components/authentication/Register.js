import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,Alert,ScrollView,ToastAndroid} from 'react-native'
import React,{useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import AuthAPIs from "./../../controller/APIs/AuthAPIs";
import StorageManager from "./../../controller/StorageManager";
import Constant from "./../../controller/Constant"
const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [isGarage, setIsGarage] = useState(false)
  function handleRegister(){
    if(!name)
      Alert.alert('Thông báo','Bạn chưa nhập tên')
    else if(!number)
      Alert.alert('Thông báo','Bạn chưa nhập số điện thoại')
    else if(number.length!=10)
      Alert.alert('Thông báo','Số diện thoại không dúng định dạng')  
    else if(!password)
      Alert.alert('Thông báo','Bạn chưa nhập mật khẩu')
    else if(password.length<6)
      Alert.alert('Thông báo','Trường mật khẩu phải có tối thiểu 6 ký tự')
    else if(!rePassword)
      Alert.alert('Thông báo','Bạn chưa nhập lại mật khẩu')
    else if(password !== rePassword)
      Alert.alert('Thông báo','Mật khẩu xác nhận không chính xác')
    else 
        {
          navigation.push('ConfirmPhoneNumber')
          AuthAPIs.register(number,password,rePassword,name)
          .then(res => {
              ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT)
              navigation.push('MyTabs')
          }).catch((err)=>
             {
                Alert.alert('Thông báo', 'Số điện thoại đã được đăng ký')
             }
          )
        }
  }
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.br1}/>
        <View style={styles.br2}/>
      </View>
      <ScrollView style={styles.scroll}
        stickyHeaderIndices={[0]}
      >
         <TouchableOpacity style={styles.header}
            onPress={() => {
              navigation.goBack()
            }}>
            <Icon name="arrow-back-outline" size={34} color="#fff" />
          </TouchableOpacity>
        <View style={styles.content}>
          <View>
            <View style={styles.formLogin}>
              <Image source={Constant.icons.logo} style={styles.logo}/>
              <Text style={styles.title}>Họ tên</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                />
              <Text style={styles.title}>Số điện thoại</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setNumber}
                  value={number}
                  keyboardType="numeric"
                />
              <Text style={styles.title}>Mật khẩu</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                />
                <Text style={styles.title}>Xác nhận mật khẩu</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setRePassword}
                  value={rePassword}
                  secureTextEntry={true}
                />
              <TouchableOpacity style={styles.btnLogin}
                onPress={handleRegister}>
                <Text style={styles.btnLoginText}>Tiếp tục</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnForgotPassword}>
              <Text style={[styles.btnForgotPasswordText,{color:'#000',fontSize: 14}]}>Ở bước tiếp theo bạn sẽ nhận được mã xác nhận ở số điên thoại gửi qua SMS</Text>
            </TouchableOpacity>
            </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity style={styles.btnRegister}
              onPress={() =>navigation.navigate('Login')}>
              <Text style={styles.btnRegisterText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background:{
    flex: 1,
  },
  br1:{
    flex:1,
    backgroundColor: 'red',
  },
  br2:{
    flex:1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
    top:0,
    left:0,
    right:0,
    bottom:0,
    position: 'absolute',
  },
  content:{
    flex:1,
    justifyContent: 'space-between',
    // backgroundColor: 'transparent',
  },
  header:{
    padding:10,
    zIndex:9999,
  },
  formLogin:{
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 40,
    elevation: 2,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  choiceType:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  checkboxContainer:{
    backgroundColor: 'white',
    borderWidth:0,
    padding:0,
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
  },
  btnLogin: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  btnLoginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnForgotPassword:{
    marginTop: 20,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  btnForgotPasswordText:{
    color: 'red',
    fontSize: 16,
  },
  footer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  footerText:{
    marginVertical:20,
    color: 'gray',
    fontSize: 16,
  },
  btnRegister:{
    backgroundColor: 'red',
    marginLeft: 10,
    padding: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  btnRegisterText:{
    color: '#fff',
    fontWeight: 'bold',
  }
})