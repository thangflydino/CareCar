import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import Slider from './Slider';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const listImage = ['https://i.ibb.co/NmBdF7f/Banner.png','https://i.ibb.co/CWRM5L3/41759a96bdac71f228bd.jpg']
  const listCategory = [
    {
      name: 'Gọi cứu hộ',
    },
    {
      name: 'Đặt lịch hẹn',
    },
    {
      name: 'Khuyến mãi',
    },
    {
      name: 'Rửa xe',
    },
  ];
  return (
    <ScrollView style={styles.container}
      stickyHeaderIndices={[2]}
      showsVerticalScrollIndicator={false}
    >
      <Slider listImage={listImage}/>
      <View style={styles.listCategory}>
        {listCategory.map((item, index) => (
          <TouchableOpacity style={styles.itemCategory} key={item.name}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://i.ibb.co/CWRM5L3/41759a96bdac71f228bd.jpg',
              }}
            />
            <Text style={styles.textCategory}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <>
      <View style={styles.search}>
        <TouchableOpacity style={[styles.inputSearch,{flex:1,marginRight:10}]}
          onPress={() =>navigation.navigate('SearchGarage')}
        >
          <Icon name="search" size={24} color="gray" />
          <Text style={styles.textSearch}>Nhập tên garage hoặc dịch vụ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputSearch}>
          <Text style={[styles.textSearch,{color:'black'}]}>Đà Nẵng</Text>
          <Icon name="chevron-down-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
      </>
      <View style={styles.listService}>
        {[1, 2, 3, 4, 5, 6,7,8,9].map((item, index) => (
          <TouchableOpacity style={styles.itemService} key={item}
            onPress={() =>navigation.navigate('DetailGarage')}
          > 
            <Image
              style={styles.imageGarage}
              source={{
                uri: 'https://i.ibb.co/CWRM5L3/41759a96bdac71f228bd.jpg',
              }}
            />
            <Text style={styles.nameGarage}>JP Long</Text>
            <View style={styles.evaluation}>
              <View style={styles.ratting}>
                 <Rating
                    imageSize={16}
                    ratingCount={1}
                    startingValue={1}
                    readonly
                    style={{margin:0,padding:0}}
                  />
                  <Text style={styles.countRating}>4.5</Text>
              </View>
              <View style={styles.comments}>
                <Icon name="chatbox-ellipses" size={16} color="red" />
                <Text style={styles.countRating}>10</Text>
              </View>
              <View style={styles.imageReviews}>
                <Icon name="camera" size={16} color="red" />
                <Text style={styles.countRating}>0</Text>
              </View>
            </View>
            <View style={styles.address}>
              <Icon name="location-outline" size={20} color="gray" />
              <Text style={styles.textAddress} numberOfLines={2}>
                630 Nguyễn Hữu Thọ, Cẩm Lệ, Đà Nẵng 
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listCategory: {
    marginVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 40,
    height: 40,
  },
  itemCategory: {
    width: (width - 50) / 4,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingTop: 10,
  },
  textCategory: {
    fontSize: 14,
    color: 'red',
    paddingTop: 5,
  },
  search: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
  textSearch: {
    paddingHorizontal: 5,
  },
  listService: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemService: {
    margin: 10,
    marginRight: 0,
    width: (width - 30) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageGarage: {
    width: (width - 30) / 2,
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameGarage: {
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  evaluation:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  ratting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countRating: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 5,
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageReviews: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  address: {
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 5,
  },
  textAddress:{
    color: 'black',
    fontSize: 12,
    marginRight: 5,
  }
});
