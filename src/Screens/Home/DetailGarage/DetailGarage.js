import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './../Slider';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTabs from './MyTabs/MyTabs';
const DetailGarage = () => {
  const listImage = [
    'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/garages/xL9YSeLwxfcNygaawDOG5CgM6AKZHeAAN17ruW8m.jpg',
    'https://carecar-prod.s3.ap-southeast-1.amazonaws.com/garages/0if7jyVVAdy79p1r502UMJx6qxXXKUtnNNxkG9ba.jpg',
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Slider listImage={listImage} />
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.nameGarage}>JP Long</Text>
          <View style={styles.address}>
            <Icon name="location-outline" size={20} color="gray" />
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
              style={{margin: 0, padding: 0}}
            />
          </View>
          <View style={styles.comments}>
            <Text style={styles.countRating}>10</Text>
            <Icon name="chatbox-ellipses" size={20} color="red" />
          </View>
        </View>
      </View>
      <MyTabs />
    </View>
  );
};

export default DetailGarage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // containerScroll:{
  //   flex: 1,
  // },
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
  },
  myTaps: {
    flex: 1,
  },
});
