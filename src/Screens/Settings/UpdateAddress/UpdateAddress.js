import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const UpdateAddress = ({route}) => {
  const province = route?.params?.province;
  const district = route?.params?.district;
  console.log('province', province);
  console.log('district', district);
  const navigation = useNavigation();
  const [detailedAddress, setDetailedAddress] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Cập nhật địa chỉ</Text>
        <TouchableOpacity style={styles.btnSave}>
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
        <TouchableOpacity onPress={() => navigation.navigate('ChoiceDistrict',{province:province})}>
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
