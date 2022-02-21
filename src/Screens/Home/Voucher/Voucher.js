import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const Voucher = ({route}) => {
  const navigation = useNavigation();
  const location = route.params?.location || 'Đà Nẵng';
  const [valueSearch, setValueSearch] = useState('');
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.search}>
        <TouchableOpacity style={styles.choiceType}>
          <Icon name="funnel-outline" size={24} color="red" />
        </TouchableOpacity>
        <View
          style={[styles.inputSearch, {flex: 1, marginRight: 10}]}
          onPress={() => navigation.navigate('SearchGarage')}>
          <Icon name="search" size={24} color="gray" />
          <TextInput
            placeholder="Tìm kiếm Voucher/Combo"
            style={styles.input}
            value={valueSearch}
            onChangeText={setValueSearch}
          />
        </View>
        <TouchableOpacity
          style={styles.inputSearch}
          onPress={() =>
            navigation.navigate('ChoiceLocation', {screen: 'Voucher'})
          }>
          <Text style={[styles.textSearch, {color: 'black'}]}>{location}</Text>
          <Icon name="chevron-down-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={item => item}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemVoucher} key={item}
              onPress={() =>navigation.navigate('DetailVoucher')}
            >
              <View style={styles.image}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/vouchers/thumbnails/1626421552791ac590-eb9a-4941-a7aa-fae756b8acc4.png',
                  }}
                />
                <View style={styles.discount}>
                  <Text style={styles.textDiscount}>10%</Text>
                </View>
              </View>
              <Text style={styles.title} numberOfLines={2}>
                [Hoàng Anh Lực] giảm giá cách âm phủ gầm cách âm phủ gầm
              </Text>
              <Text style={styles.countSave}>Đã lưu 1/30</Text>
              <TouchableOpacity style={styles.btnSave}
                 onPress={() =>{
                    ToastAndroid.show('Lưu Voucher thành công',ToastAndroid.SHORT)
                  }}
              >
                <Text style={styles.textBtn}>Lưu ngay</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Voucher;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  search: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
  textSearch: {
    paddingHorizontal: 5,
  },
  choiceType: {
    paddingRight: 10,
  },
  input: {
    padding: 0,
    paddingLeft: 10,
    margin: 0,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
  },
  itemVoucher: {
    width: (width - 30) / 2,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  image: {
    width: (width - 30) / 2,
    height: 100,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  discount: {
    position: 'absolute',
    bottom:1,
    left:0,
    padding:2,
    paddingHorizontal:10,
    backgroundColor: '#f8d637',
    borderTopRightWidth:10,
    borderBottomRightWidth:10,
    borderTopRightColor: 'red',
    borderBottomRightColor: 'red'
  },
  textDiscount: {
    color: 'red',
    fontWeight: 'bold',
    fontSize:16,
  },
  title: {
    fontSize: 14,
    color: '#000',
    padding: 10,
  },
  countSave: {
    fontSize: 12,
    color: '#5f5f5f',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  btnSave: {
    alignSelf: 'center',
    padding: 20,
    paddingVertical: 4,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
  textBtn: {
    color: 'red',
  },
});
