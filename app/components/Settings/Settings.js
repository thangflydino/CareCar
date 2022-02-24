import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { Dimensions } from "react-native";
import StorageManager from "./../../controller/StorageManager";
import FormData from 'form-data'
import AuthAPIs from "./../../controller/APIs/AuthAPIs";
import { useDispatch,useSelector } from "react-redux";
const Settings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataUser = useSelector(state =>state.userSlice.data);
  const [modalVisible, setModalVisible] = useState(false);
  const info = [
    {
      name: 'Họ tên',
      value: dataUser?.user?.name||'',
      type: 'name',
    },
    {
      name: 'Số điên thoại',
      value: dataUser?.user?.phone||'',
      type: 'phone',
    },
    {
      name: 'Địa chỉ',
      value: `${dataUser?.user?.address} ${dataUser?.user?.district} ${dataUser?.user?.province}`,
      type: 'address',
    },
    {
      name: 'Thay đổi mật khẩu',
      value: '',
      type: 'password',
    },
    {
      name: 'Câu hỏi thường gặp',
      value: '',
      type: 'question',
    },
  ];
  const handleOnClick = type => {
    if (type === 'name') navigation.navigate('UpdateName',{name:dataUser?.user?.name});
    if (type === 'address') navigation.navigate('UpdateAddress',
      {
        province:{name:dataUser?.user?.province,id:dataUser?.user?.province_id},
        district:{name:dataUser?.user?.district,id:dataUser?.user?.district_id},
        address:dataUser?.user?.address
      });
    if (type === 'password') navigation.navigate('ChangePassword',{dataUser:dataUser});
  };
  const handleOnSaveImage = (file) => {
    var img = new FormData();
    img.append('file',file);
    const data ={
      avatar:img
    }
     AuthAPIs.updateAvatarProfile(data,dataUser).then((res) => {
            Alert.alert('Thông báo', 'Cập nhật avatar thành công')
            navigation.goBack()
          }).catch((err) => {
              Alert.alert('Thông báo', 'Lỗi')
          })
  }
  const openCamera = () => {
    ImagePicker.openCamera({mediaType: 'photo'})
      .then(image => {
        let file ={
          uri:image.path,
          type:image.mime,
          name :image.path.substring(image.path.lastIndexOf('/') + 1)
        }
        handleOnSaveImage(file);
        setModalVisible(false);
      })
      .catch(error => {});
  };
  const openLibrary = () => {
    ImagePicker.openPicker({mediaType: 'photo'})
      .then(image => {
        let file ={
          uri:image.path,
          type:image.mime,
          name :image.path.substring(image.path.lastIndexOf('/') + 1)
        }
        handleOnSaveImage(file);
        setModalVisible(false);
      })
      .catch(error => {});
  };
  useEffect(() => {
    if(!dataUser.user)
      navigation.navigate('Login')
  },[])
  if(!dataUser?.user)
    return null
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.avatar, {marginVertical: 20}]}
          onPress={() => setModalVisible(true)}>
          <Image
            source={{uri: dataUser?.user?.avatar}}
            style={styles.avatar}
          />
          <Text style={styles.textUpdateAvatar}>Sửa</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <View style={styles.titleInfo}>
            <Text style={styles.textTitleInfo}>Thông tin cá nhân</Text>
          </View>
          <View style={styles.contentInfo}>
            {info.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.itemInfo, index == 0 && {borderTopWidth: 0}]}
                  disabled={item.type == 'phone' ? true : false}
                  onPress={() => handleOnClick(item.type)}>
                  <Text style={styles.textItemInfo}>{item.name}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center',flex:1,justifyContent: 'flex-end'}}>
                    <Text style={styles.textItemInfo} numberOfLines={1}>{item.value}</Text>
                    {item.type !== 'phone' && (
                      <Icon
                        name="chevron-forward-outline"
                        size={20}
                        color="gray"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.tutorial}>
          <View style={styles.titleInfo}>
            <Text style={styles.textTitleInfo}>Combo rửa xe</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleTutorial}>
              Hướng dẫn sử dụng combo rửa xe
            </Text>
            <Text style={styles.textTutorial}>
              Step 1: Mở ứng dụng CareCar{'\n'}
              {'\n'}
              Step 2: Thực hiện quét mã QR-Code tại địa điểm rửa xe{'\n'}
              {'\n'}* Mã QR-Code được đặt ở quầy thanh toán{'\n'}
              {'\n'}
              Step 3: Hiển thị kết quả{'\n'}
              {'\n'}
              Màn hình hiển thị thông báo thành công nếu Combo còn số lượng sử
              dụng{'\n'}
              {'\n'}
              Màn hình hiển thị thông báo lỗi nếu Combo còn số lượng sử dụng
              {'\n'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            StorageManager.logoutUser()
            navigation.navigate('Login')
          }}>
          <Text style={styles.textLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{margin: 0,justifyContent: 'flex-end'}}>
        <View style={styles.choiceImage}>
          <Text style={styles.textTitleChoiceImage}>Chọn ảnh</Text>
          <TouchableOpacity
            style={styles.itemChoice}
            onPress={() => openCamera()}>
            <Text style={styles.textItemChoice}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemChoice}
            onPress={() => openLibrary()}>
            <Text style={styles.textItemChoice}>Thư viện</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemChoice, styles.itemExit]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.textItemChoice}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  avatar: {
    // marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  textUpdateAvatar: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    color: '#fff',
  },
  info: {},
  titleInfo: {
    backgroundColor: 'red',
    padding: 6,
    marginVertical: 10,
  },
  textTitleInfo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentInfo: {
    backgroundColor: '#fff',
    margin: 10,
    // marginVertical:20,
    borderRadius: 10,
    elevation: 3,
  },
  itemInfo: {
    padding: 10,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.4,
    borderTopColor: '#ccc',
  },
  textItemInfo: {
    fontSize: 16,
    color: '#000',
  },
  titleTutorial: {
    padding: 10,
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  textTutorial: {
    padding: 10,
    fontSize: 16,
  },
  logout: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  textLogout: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // modal choiceImage
  choiceImage: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  textTitleChoiceImage: {
    fontSize: 16,
    color: 'gray',
    padding: 14,
    textAlign: 'center',
  },
  itemChoice: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  textItemChoice: {
    color: '#4ca3ff',
    fontSize: 18,
    textAlign: 'center',
  },
  itemExit: {
    borderTopWidth: 10,
  },
  // 2
  modalView: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  content: {
    width: '95%',
    height: '50%',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
