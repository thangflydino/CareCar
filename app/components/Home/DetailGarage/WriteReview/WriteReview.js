import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
const listReviews = [
  'Tư vẫn & Quy trình làm việc',
  'Kỹ thuật chỉnh sửa',
  'Thái độ phục vụ',
  'Thời gian sửa chữa',
  'Không gia và cơ sở vật chất',
];

const WriteReview = () => {
  const [ratting, setRatting] = useState({
    0: 5,
    1: 5,
    2: 5,
    3: 5,
    4: 5,
  });
  const [listImage, setListImage] = useState([]);
  const [textReview, setTextReview] = useState('');
  const ratingCompleted = (value, index) => {
    setRatting({...ratting, [index]: value});
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.infoGarage}>
          <Image
            style={styles.imageGarage}
            source={{uri: 'https://images6.alphacoders.com/102/1029037.jpg'}}
          />
          <View style={styles.info}>
            <Text style={styles.nameGarage}>JP Long</Text>
            <Text style={styles.addressGarage}>
              630 Nguyễn Hữu Thọ, Cẩm Lệ, Đà Nẵng
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.ratting}>
            {listReviews.map((item, index) => (
              <View style={styles.item} key={index}>
                <Text style={styles.title}>{item}</Text>
                <Rating
                  type="star"
                  fractions={0}
                  startingValue={5}
                  imageSize={30}
                  onFinishRating={ratting => ratingCompleted(ratting, index)}
                  style={{paddingVertical: 10}}
                />
              </View>
            ))}
          </View>
          <View style={styles.listImage}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <View style={styles.itemImage} key={index}>
                <TouchableOpacity
                  style={{position: 'absolute', top: 4, right: 4}}>
                  <Icon name={'close'} size={20} color={'#bdbdbd'} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Icon name={'camera'} size={60} color={'#bdbdbd'} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder={'Nhập nội dung đánh giá'}
          onChangeText={setTextReview}
          value={textReview}
          numberOfLines={10}
          textAlignVertical="top"
        />
      </ScrollView>
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textSubmit}>Gửi đánh giá</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteReview;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    marginBottom: 60,
  },
  imageGarage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoGarage: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  info: {
    padding: 10,
    flex: 1,
  },
  nameGarage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  addressGarage: {
    fontSize: 14,
    color: 'gray',
  },
  ratting: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  listImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 60) / 3,
    height: (width - 60) / 3,
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  btnSubmit: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textSubmit: {
    color: '#fff',
    fontSize: 18,
  },
  textInput: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    backgroundColor: '#e8e8e8',
    borderColor: '#ddd',
    fontSize: 16,
  },
});
