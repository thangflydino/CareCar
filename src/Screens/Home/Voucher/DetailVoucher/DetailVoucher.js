import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ToastAndroid
} from 'react-native';
import React from 'react';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';
import { Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native'
const DetailVoucher = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/vouchers/thumbnails/1626421552791ac590-eb9a-4941-a7aa-fae756b8acc4.png',
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            [Hoàng Anh Lực] Giảm giá bảo dưỡng định kỳ
          </Text>
          <Text style={styles.textContent}>
            [Garage Hoàng Anh Lực] Giảm 200.000 khi thay 4 lốp xe{'\n'}
            Lưu ý: Chương trình khuyến mãi này không được cộng dồn với chương
            trình khuyến mãi đặt lịch qua app CareCar{'\n'}
            {'\n'}
            [Các tiện ích đi kèm khi sử dụng ứng dụng CareCar]{'\n'}- Nhận và
            giao xe tận nơi miễn phí{'\n'}- Miễn phí kiểm tra xe tổng quát{'\n'}
            - Miễn phí đọc và xóa lỗi bằng thiết bị chuyên dụng{'\n'}- Miễn phí
            tiền công lắp đặt phụ kiện thêm cho xe
          </Text>
          <Text style={styles.discount}>10%</Text>
          <View style={styles.receive}>
            <View style={styles.received}>
              <Icon name="download-outline" size={24} color="#000" />
              <Text style={styles.countReceived}>2 lượt lưu</Text>
            </View>
            <Text style={styles.countReceived}>Còn lại 28</Text>
          </View>
        </View>
        <View style={styles.applicable}>
          <Text style={styles.titleApplicable}>Áp dụng tại garage</Text>
          <Pressable style={styles.garage}
            onPress={() =>navigation.navigate('DetailGarage')}
          >
            <Image style={styles.imageGarage} source={{uri:'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/avatars/bjNUTN2vVQVpRzBQGzMzvyJO82KvYIX3nQXNddjw.jpg'}}/>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={styles.nameGarage}>JP Long</Text>
                <View style={styles.address}>
                  <Text style={styles.textAddress} numberOfLines={2}>
                    630 Nguyễn Hữu Thọ, Cẩm Lệ, Đà Nẵng
                  </Text>
                </View>
              </View>
              <View style={styles.evaluation}>
                <View style={styles.ratting}>
                  <Text style={styles.countRating}>4.5</Text>
                  <Rating
                    imageSize={20}
                    ratingCount={1}
                    startingValue={1}
                    readonly
                    style={{margin: 0, padding: 0,backgroundColor:'red'}}
                    tintColor={'#f2f2f2'}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnSaveVoucher}
          onPress={() =>{
            ToastAndroid.show('Lưu Voucher thành công',ToastAndroid.SHORT)
            navigation.goBack()
          }}
        >
          <Text style={styles.textBtnSaveVoucher}>
            Lưu ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailVoucher;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  image: {
    width: width,
    height: 300,
  },
  content: {
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  textContent: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  discount: {
    marginTop: 10,
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  receive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  received: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countReceived: {
    fontSize: 16,
    color: 'black',
  },
  applicable: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f2f2f2',
  },
  titleApplicable: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
    garage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10,
  },
   info: {
     flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingRight: 10,
  },
  infoItem: {
    paddingHorizontal: 10,
  },
  imageGarage:{
    width:70,
    height:70,
    borderRadius:50,
  },
  nameGarage: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  address: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
  },
  textAddress: {
    color: 'black',
    fontSize: 12,
  },
  evaluation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratting: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  countRating: {
    color: 'black',
    fontSize: 16,
    padding: 5,
  },
  footer:{
    padding:10,
    alignItems: 'center',
    backgroundColor:'#f2f2f2'
  },
  btnSaveVoucher: {
    backgroundColor: 'red',
    padding:10,
    minWidth:width/3,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  textBtnSaveVoucher: {
    color: '#fff',
    fontSize:16,
  }
});
