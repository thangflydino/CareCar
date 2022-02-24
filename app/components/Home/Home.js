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
import React,{useState, useEffect} from 'react';
import Slider from './Slider';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import StorageManager from "./../../controller/StorageManager";
import CommonAPIs from "./../../controller/APIs/CommonAPIs";
// import Loading from "./../Components/Loading";
import Loading from "./../components/Loading";

const Home = ({route}) => {
  const location = route.params?.location || 'Đà Nẵng';
  const navigation = useNavigation();
  const [listGarages,setListGarages] = useState([])
  const [loading,setLoading] = useState(true)
  const listImage = ['https://i.ibb.co/NmBdF7f/Banner.png','https://i.ibb.co/CWRM5L3/41759a96bdac71f228bd.jpg']
  const listCategory = [
    {
      name: 'Gọi cứu hộ',
      type: 'CallForHelp',
      image:'https://i.ibb.co/wcnfckL/89b1a761dd8911d748983.jpg'
    },
    {
      name: 'Đặt lịch hẹn',
      type: 'MakeAnAppointment',
      image:'https://i.ibb.co/fNn9FXK/e085525e28b6e4e8bda74.jpg'
    },
    {
      name: 'Khuyến mãi',
      image:'https://i.ibb.co/hDPckw0/114613b57a5db603ef4c.jpg',
      type:'Voucher'
    },
    {
      name: 'Rửa xe',
      image:'https://i.ibb.co/GCd4jt0/9f6f73890961c53f9c705.jpg',
      type:'CarWash'
    },
  ];
  const handlePressCategory = (type) => {
    if(type === 'MakeAnAppointment'){
      navigation.navigate('MakeAnAppointment');
    }
    else if(type === 'CallForHelp')
      navigation.navigate('CallForHelp');
    else if(type === 'Voucher')
      navigation.navigate('Voucher');
    else if(type === 'CarWash')
    navigation.navigate('CarWash');
  }
  useEffect(() => {
    CommonAPIs.getAllGarages().then((res) => {
      setListGarages(res.data)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
    })
  },[])
  return (
    <ScrollView style={styles.container}
      stickyHeaderIndices={[2]}
      showsVerticalScrollIndicator={false}
    >
      <Slider listImage={listImage}/>
      <View style={styles.listCategory}>
        {listCategory.map((item, index) => (
          <TouchableOpacity style={styles.itemCategory} key={item.name}
            onPress={() => handlePressCategory(item.type)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.textCategory}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <>
      <View style={styles.search}>
        <TouchableOpacity style={[styles.inputSearch,{flex:1,marginRight:10}]}
          onPress={() =>navigation.navigate('SearchGarage',{listGarages:listGarages})}
        >
          <Icon name="search" size={24} color="gray" />
          <Text style={styles.textSearch} numberOfLines={1}>Nhập tên garage hoặc dịch vụ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputSearch}
          onPress={() =>navigation.navigate('ChoiceLocation')}
        >
          <Text style={[styles.textSearch,{color:'black'}]}>{location}</Text>
          <Icon name="chevron-down-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
      </>
      {loading?<Loading/>:
      <View style={styles.listService}>
        {listGarages.map((item, index) => (
          <TouchableOpacity style={styles.itemService} key={item.id}
            onPress={() =>navigation.navigate('DetailGarage',{idGarage:item.id})}
          > 
            <Image
              style={styles.imageGarage}
              source={{
                uri:item.avatar,
              }}
            />
            <Text style={styles.nameGarage}>{item.name}</Text>
            <View style={styles.evaluation}>
              <View style={styles.ratting}>
                 <Rating
                    imageSize={16}
                    ratingCount={1}
                    startingValue={1}
                    readonly
                    style={{margin:0,padding:0}}
                  />
                  <Text style={styles.countRating}>{item.avg_rating}</Text>
              </View>
              <View style={styles.comments}>
                <Icon name="chatbox-ellipses" size={16} color="red" />
                <Text style={styles.countRating}>{item.review_count}</Text>
              </View>
              <View style={styles.imageReviews}>
                <Icon name="camera" size={16} color="red" />
                <Text style={styles.countRating}>{item.review_images_count}</Text>
              </View>
            </View>
            <View style={styles.address}>
              <Icon name="location-outline" size={20} color="gray" />
              <Text style={styles.textAddress} numberOfLines={2}>
                {item.address} {item.district}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
        }
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
    height: 50,
    width: '80%',
    resizeMode:'contain',
  },
  itemCategory: {
    width: (width - 50) / 4,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingVertical: 5,
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
