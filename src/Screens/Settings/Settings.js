import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
const Settings = () => {
  const navigation = useNavigation();
  const info =[
    {
      name: 'Họ tên',
      value: 'Nguyễn Văn A',
      type: 'name'
    },
    {
      name: 'Số điên thoại',
      value: '0987654321',
      type: 'phone',
    },
    {
      name: 'Địa chỉ',
      value: '',
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
    }
  ]
  const handleOnClick = (type) => {
    if(type === 'name')
      navigation.navigate('UpdateName')
    if(type === 'address')
      navigation.navigate('UpdateAddress')
    if(type === 'password')
      navigation.navigate('ChangePassword')
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={[styles.avatar,{marginVertical:20}]}>
          <Image
            source={{uri: 'https://images6.alphacoders.com/102/1029037.jpg'}}
            style={styles.avatar}
          />
          <Text style={styles.textUpdateAvatar}>Sửa</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <View style={styles.titleInfo}>
            <Text style={styles.textTitleInfo}>
            Thông tin cá nhân
          </Text>
          </View>
          <View style={styles.contentInfo}>
            {
              info.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={[styles.itemInfo,index==0&&{borderTopWidth: 0}]}
                    disabled={item.type=='phone'?true:false}
                    onPress={()=>handleOnClick(item.type)}>
                    <Text style={styles.textItemInfo}>{item.name}</Text>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                      <Text style={styles.textItemInfo}>{item.value}</Text>
                      {item.type!=='phone'&&<Icon name='chevron-forward-outline' size={20} color='gray' />}
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        <View style={styles.tutorial}>
          <View style={styles.titleInfo}>
            <Text style={styles.textTitleInfo}>
            Combo rửa xe
          </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleTutorial}>
              Hướng dẫn sử dụng combo rửa xe
            </Text>
            <Text style={styles.textTutorial}>
              Step 1: Mở ứng dụng CareCar{"\n"}{"\n"}
              Step 2: Thực hiện quét mã QR-Code tại địa điểm rửa xe{"\n"}{"\n"}
              * Mã QR-Code được đặt ở quầy thanh toán{"\n"}{"\n"}
               Step 3: Hiển thị kết quả{"\n"}{"\n"}
              Màn hình hiển thị thông báo thành công nếu Combo còn số lượng sử dụng{"\n"}{"\n"}
              Màn hình hiển thị thông báo lỗi nếu Combo còn số lượng sử dụng{"\n"}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logout}
          onPress={()=>navigation.replace('Login')}>
          <Text style={styles.textLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

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
  info:{
  },
  titleInfo:{
    backgroundColor:'red',
    padding:6,
    marginVertical:10,
  },
  textTitleInfo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  contentInfo:{
    backgroundColor:'#fff',
    margin:10,
    // marginVertical:20,
    borderRadius:10,
    elevation: 3,
  },
  itemInfo:{
    padding:10,
    paddingVertical:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.4,
    borderTopColor: '#ccc',
  },
  textItemInfo:{
    fontSize: 16,
    color: '#000',
  },
  titleTutorial:{
    padding:10,
    marginTop:10,
    paddingBottom:0,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  },
  textTutorial:{
    padding:10,
    fontSize: 16,
  },
  logout:{
    backgroundColor:'red',
    padding:10,
    margin:10,
    marginVertical:20,
    borderRadius:10,
  },
  textLogout:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
