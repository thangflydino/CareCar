import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isGarage, setIsGarage] = useState(false);
  function handleLogin() {
    if (!number) Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại');
    else 
      {
        Alert.alert('Thông báo', 'Mã xác nhận đã được gửi qua SMS');
        navigation.replace('Home');
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
            navigation.goBack();
          }}>
          <Icon name="arrow-back-outline" size={34} color="#fff" />
        </TouchableOpacity>
        <View style={styles.formLogin}>
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
            />
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                handleLogin();
              }}>
              <Text style={styles.btnLoginText}>Gửi mã</Text>
            </TouchableOpacity>
        </View>
        <View/>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
});
