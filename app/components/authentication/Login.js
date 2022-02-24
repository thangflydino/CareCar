import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import AuthAPIs from "./../../controller/APIs/AuthAPIs";
import StorageManager from "./../../controller/StorageManager";
import Constant from "./../../controller/Constant"
const Login = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isGarage, setIsGarage] = useState(false);
  function handleLogin() {
    if (!number) Alert.alert('Thông báo', 'Bạn chưa nhập số điện thoại');
    else if (number.length!=10) Alert.alert('Thông báo', 'Số diện thoại không dúng định dạng');
    else if (!password) Alert.alert('Thông báo', 'Bạn chưa nhậpđ mật khẩu');
    else if (password.length<6) Alert.alert('Thông báo', 'Trường mật khẩu phải có tối thiểu 6 ký tự');
    else {
      AuthAPIs.login(number,password).then((res)=>
        {
          ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
          StorageManager.setDataUser(res)
          navigation.replace('MyTabs');
        }
      ).catch((err)=>
        {
          Alert.alert('Thông báo', 'Số điện thoại hoặc mật khẩu không chính xác');
        }
      )
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.br1} />
        <View style={styles.br2} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => {
            navigation.replace('MyTabs');
          }}>
          <Icon name="arrow-back-outline" size={34} color="#fff" />
        </TouchableOpacity>
        <View>
          <View style={styles.formLogin}>
            <Image
              source={Constant.icons.logo}
              style={styles.logo}
            />
            <View style={styles.choiceType}>
              <CheckBox
                center
                title="Cá nhân"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={!isGarage}
                containerStyle={styles.checkboxContainer}
                onPress={() => setIsGarage(!isGarage)}
              />
              <CheckBox
                center
                title="Garage"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={styles.checkboxContainer}
                checked={isGarage}
                onPress={() => setIsGarage(!isGarage)}
              />
            </View>
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
              secureTextEntry={true}
              value={password}
            />
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                handleLogin();
              }}>
              <Text style={styles.btnLoginText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnForgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.btnForgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnRegisterText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  br1: {
    flex: 1,
    backgroundColor: 'red',
  },
  br2: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  header: {
    padding: 10,
  },
  formLogin: {
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
  choiceType: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 0,
  },
  title: {
    fontSize: 18,
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
  btnForgotPassword: {
    marginTop: 20,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  btnForgotPasswordText: {
    color: 'red',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginVertical: 20,
    color: 'gray',
    fontSize: 16,
  },
  btnRegister: {
    backgroundColor: 'red',
    marginLeft: 10,
    padding: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  btnRegisterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
