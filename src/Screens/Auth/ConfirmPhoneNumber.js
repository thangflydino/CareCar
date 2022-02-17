import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const ConfirmPhoneNumber = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  function handleLogin() {
    if (!number) Alert.alert('Thông báo', 'Vui lòng nhập mã xác nhận');
    else navigation.replace('Home');
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
            navigation.goBack();
          }}>
          <Icon name="arrow-back-outline" size={34} color="#fff" />
        </TouchableOpacity>
        <View style={styles.formLogin}>
            <Text style={styles.title}>Mã xác thực</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
            />
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                handleLogin();
              }}>
              <Text style={styles.btnLoginText}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnForgotPassword}>
              <Text style={styles.btnForgotPasswordText}>Gửi lại mã</Text>
            </TouchableOpacity>
          </View>
          <View/>
      </View>
    </View>
  );
};

export default ConfirmPhoneNumber;

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
    // backgroundColor: 'transparent',
  },
  header: {
    padding: 10,
  },
  formLogin: {
    backgroundColor: '#fff',
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 40,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  btnLogin: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  btnLoginText: {
    color: '#fff',
    fontSize: 20,
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
});
