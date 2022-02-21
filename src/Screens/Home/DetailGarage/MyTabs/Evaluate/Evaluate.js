import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, FlatList } from "react-native";
import React,{useState, useEffect} from 'react';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Modal from "react-native-modal";
const listReviews =[
    'Tư vẫn & Quy trình làm việc',
    'Kỹ thuật chỉnh sửa',
    'Thái độ phục vụ',
    'Thời gian sửa chữa',
    'Không gia và cơ sở vật chất'
  ]
const Evaluate = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.info}>
        <View style={styles.rating}>
          <Rating
            type="star"
            startingValue={4.8}
            readonly
            imageSize={20}
            style={{paddingVertical: 10}}
          />
          <Text style={styles.countRating}>4.8/5 (16 bình luận)</Text>
        </View>
        <TouchableOpacity style={styles.buttonMoreRating}
          onPress={() =>setModalVisible(!modalVisible)}
        >
          <Icon name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.comment}>
        <TouchableOpacity style={styles.btnComment}
          onPress={() =>navigation.navigate('WriteReview')}>
          <Text style={styles.textBtnComment}>Viết đánh giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSort}>
          <Icon name="funnel" size={20} color="gray" />
          <Text style={styles.textBtnSort}>Mới nhất</Text>
          <Icon name="chevron-down-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.listComment}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <View style={styles.itemComment} key={item}>
            <Avatar
              size={30}
              rounded
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              containerStyle={{backgroundColor: '#6733b9'}}
            />
            <View style={styles.infoComment}>
              <Text style={styles.nameComment}>Nguyễn Văn A</Text>
              <View style={styles.rating2}>
                <Text style={styles.countRating2}>5.0</Text>
                <Rating
                  type="star"
                  startingValue={4.8}
                  readonly
                  imageSize={10}
                  style={{paddingVertical: 10}}
                />
                <TouchableOpacity style={styles.buttonMoreRating2}
                  onPress={() =>setModalVisible(true)}
                >
                  <Icon name="chevron-down-outline" size={20} color="gray" />
                </TouchableOpacity>
              </View>
              <Text style={styles.contentComment}>
                Tốt có thể yên tâm mang xe qua ahihihi
              </Text>
              <Text style={styles.timeComment}>20/10/2019</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    {/* Modal */}
    <Modal
        transparent={true}
        visible={modalVisible}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{flex: 1, backgroundColor: 'black',opacity:0}}></Pressable>
        <View style={styles.morePostContent}>
          <View style={styles.titleModal}>
            <Text style={styles.textTitleModal}>Đánh giá</Text>
          </View>
          <View style={styles.contentModal}>
            {
              listReviews.map((item, index) => (
                <View style={[styles.rating,{
                  justifyContent: 'space-between',
                }]} key={index}>
                  <Text style={[styles.nameRating,{width: '40%'}]} numberOfLines={2}>{item}</Text>
                  <Rating
                    type="star"
                    startingValue={4.8}
                    readonly
                    imageSize={20}
                    style={{paddingVertical: 10}}
                  />
                  <Text style={styles.countRating}>4.8</Text>
                </View>
              ))
            }
          </View>
        </View>
      </Modal>
      </>
  );
};

export default Evaluate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 6,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countRating: {
    fontSize: 16,
    color: '#777',
    paddingHorizontal: 10,
  },
  buttonMoreRating: {},
  comment: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnComment: {
    padding: 10,
    marginHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBtnComment: {
    fontSize: 14,
    color: '#fff',
  },
  btnSort: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  textBtnSort: {
    fontSize: 14,
    color: 'black',
  },
  listComment: {},
  itemComment: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 0.4,
    borderColor: '#ddd',
  },
  infoComment: {
    marginLeft: 10,
  },
  nameComment: {
    fontSize: 14,
    color: '#333',
  },
  contentComment: {
    fontSize: 14,
    color: 'black',
  },
  timeComment: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },
  rating2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countRating2: {
    fontSize: 14,
    marginRight: 4,
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    opacity: 0.3
  },
  modalText:{
    color:'black'
  },
  morePostContent: {
    position: 'absolute',
    left: 0,right: 0,
    marginHorizontal:20,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  titleModal:{
    padding:16,
    backgroundColor:'#f9f9fb',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray'
  },
  textTitleModal:{
    fontSize:18,
    color:'black',
    textAlign:'center',
  },
  contentModal:{
    padding:16,
    marginBottom:10,
  }
});
