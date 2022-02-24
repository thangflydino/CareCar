import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Slider from './../Slider';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import Detail from './MyTabs/Detail/Detail';
import Service from './MyTabs/Service/Service';
import Appointment from './MyTabs/Appointment/Appointment';
import Evaluate from './MyTabs/Evaluate/Evaluate';
import CommonAPIs from "./../../../controller/APIs/CommonAPIs";
import Loading from "./../../components/Loading";

const tabs = [
  {
    id: 0,
    name: 'Thông tin',
    type: 'detail',
  },
  {
    id: 1,
    name: 'Dịch vụ',
    type: 'service',
  },
  {
    id: 3,
    name: 'Lịch hẹn',
    type: 'appointment',
  },
  {
    id: 4,
    name: 'Đánh giá',
    type: 'evaluate',
  },
];

const DetailGarage = ({route}) => {
  const idGarage = route?.params?.idGarage
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [dataGarage, setDataGarage] = useState({});

  const listImage = [
    'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/garages/xL9YSeLwxfcNygaawDOG5CgM6AKZHeAAN17ruW8m.jpg',
    'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/garages/0if7jyVVAdy79p1r502UMJx6qxXXKUtnNNxkG9ba.jpg',
  ];
  const [location, setLocation] = useState({
    latitude: 16.06613,
    longitude: 108.2411,
    latitudeDelta: 0.439158482,
    longitudeDelta: 0.2272421121,
  });
  const [isFocusTab, setIsFocusTab] = useState(3);
  useEffect(() => {
    
    CommonAPIs.getGarageByID(idGarage)
      .then(res => {
        setDataGarage(res);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);
  const onRegionChange = region => {
    setLocation(region);
  };
  // if(!idGarage) return null;
  return (
    <View style={styles.container}>
      <Header name={dataGarage.name}/>
      {loading?<Loading/>:
      <ScrollView
        style={{flex: 1}}
        stickyHeaderIndices={[3]}
        showsVerticalScrollIndicator={false}>
        <Slider listImage={listImage} />
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Text style={styles.nameGarage}>{dataGarage?.name}</Text>
            <View style={styles.address}>
              <Icon name="location-outline" size={20} color="gray" />
              <Text style={styles.textAddress} numberOfLines={2}>
                {dataGarage?.address} {dataGarage?.district}{' '}
                {dataGarage?.province}
              </Text>
            </View>
          </View>
          <View style={styles.evaluation}>
            <View style={styles.ratting}>
              <Text style={styles.countRating}>{dataGarage?.avg_rating}</Text>
              <Rating
                imageSize={20}
                ratingCount={1}
                startingValue={1}
                readonly
                style={{margin: 0, padding: 0}}
              />
            </View>
            <View style={styles.comments}>
              <Text style={styles.countRating}>{dataGarage?.review_count}</Text>
              <Icon name="chatbox-ellipses" size={20} color="red" />
            </View>
          </View>
        </View>
        <View style={styles.map}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: dataGarage?.latitude ||16.06613,
              longitude: dataGarage?.longitude ||108.2411,
              latitudeDelta: 0.01,
              longitudeDelta: 0.001,
            }}
            // region={location}
            onRegionChange={onRegionChange}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.timeOpen}>
              <Text style={styles.status}>Đang mởi cửa</Text>
              <Text style={styles.timeOpenTitle}>7:00 - 17:30</Text>
            </View>
            <TouchableOpacity
              style={styles.orderNow}
              onPress={() =>
                navigation.navigate('MakeAnAppointment', {
                  nameGarage: dataGarage?.name,
                })
              }>
              <Icon name="checkmark-circle" size={20} color="red" />
              <Text style={styles.titleOrderNow}>Đặt lịch ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.orderNow}
              onPress={() => navigation.navigate('Message')}>
              <Icon name="chatbox-ellipses" size={20} color="red" />
              <Text style={styles.titleOrderNow}>Chat ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
        <>
          <View style={styles.tabs}>
            {tabs.map((item, index) => (
              <TouchableOpacity
                style={[
                  styles.itemTab,
                  isFocusTab == index && styles.itemTabFocus,
                ]}
                key={item.type}
                onPress={() => setIsFocusTab(index)}>
                <Text
                  style={[
                    styles.textTab,
                    isFocusTab == index && styles.textTabFocus,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
        <View style={styles.content}>
          {isFocusTab == 0 && <Detail description={dataGarage?.description}/>}
          {isFocusTab == 1 && <Service services={dataGarage?.services}/>}
          {isFocusTab == 2 && <Appointment dataGarage={dataGarage}/>}
          {isFocusTab == 3 && <Evaluate dataGarage={dataGarage}/>}
        </View>
      </ScrollView>}
    </View>
  );
};

export default DetailGarage;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingRight: 10,
  },
  infoItem: {
    paddingHorizontal: 10,
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
  },
  countRating: {
    color: 'black',
    fontSize: 16,
    padding: 5,
  },
  comments: {
    alignItems: 'center',
    marginLeft:4,
  },
  myTaps: {
    flex: 1,
  },
  mapStyle: {
    width: width,
    height: 100,
  },
  timeOpen: {
    alignItems: 'center',
  },
  status: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  timeOpenTitle: {
    fontSize: 16,
    color: 'black',
  },
  orderNow: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 6,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleOrderNow: {
    fontSize: 14,
    color: 'red',
  },
  tabs: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  itemTab: {
    flex: 1,
    padding: 10,
  },
  itemTabFocus: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  textTab: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  textTabFocus: {
    color: 'red',
  },
  content: {
    // flex: 1,
  },
});
