import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AuthAPIs from "./../../../controller/APIs/AuthAPIs";
import {useDispatch,useSelector} from 'react-redux'
import {setUser} from '../../../redux/userSlice'
import StorageManager from "./../../../controller/StorageManager";

const UpdateAddress = ({route}) => {
  const province = route?.params?.province;
  const district = route?.params?.district;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataUser = useSelector(state =>state.userSlice.data);
  const [detailedAddress, setDetailedAddress] = useState(route?.params?.address??'');
  const handleOnSave =() => {
    const data ={
      address: detailedAddress,
      province: province?.name,
      province_id:province?.id,
      district: district?.name,
      district_id:district?.id,
    }
    AuthAPIs.updateProfile(data,dataUser).then((res) => {
       StorageManager.setDataUser({
         ...dataUser, user:{...dataUser?.user,...res}
       })
        dispatch(setUser({
         ...dataUser, user:{...dataUser?.user,...res}
       }))
       ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT)
       navigation.goBack()
    }).catch((err) => {
      Alert.alert('Thông báo', 'Lỗi')
    })

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Cập nhật địa chỉ</Text>
        <TouchableOpacity style={styles.btnSave}
          onPress={() =>handleOnSave()}
        >
          <Text style={styles.textSave}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate('ChoiceProvince')}>
          <Text style={styles.title}>Tỉnh/Thành Phố</Text>
          <View pointerEvents="none">
            <TextInput style={styles.input} value={province?.name} />
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => {
          if(!province?.name)
            Alert.alert('Thông báo','Bạn chưa chọn Tỉnh/Thành Phố')
          else
          navigation.navigate('ChoiceDistrict',{province:province})
        }}>
          <Text style={styles.title}>Quận/huyện</Text>
          <View pointerEvents="none">
            <TextInput style={styles.input} value={district?.name} />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Địa chỉ chi tiết</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDetailedAddress}
          value={detailedAddress}
        />
      </View>
    </View>
  );
};

export default UpdateAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  textSave: {
    color: 'red',
    fontSize: 18,
    marginRight: 10,
  },
  body: {
    flex: 1,
    padding: 10,
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
    fontSize: 18,
  },
});
