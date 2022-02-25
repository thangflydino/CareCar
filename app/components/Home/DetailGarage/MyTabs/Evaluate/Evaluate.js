import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { format,parseISO  } from "date-fns";
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import ShowModal from "./ShowModal";
import CommonAPIs from "./../../../../../controller/APIs/CommonAPIs";
import Loading from "./../../../../Components/Loading";

const listReviews = [
  'Tư vẫn & Quy trình làm việc',
  'Kỹ thuật chỉnh sửa',
  'Thái độ phục vụ',
  'Thời gian sửa chữa',
  'Không gia và cơ sở vật chất',
];

const Evaluate = ({dataGarage}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading,setLoading] = useState(true)
  const [listReviews,setListReviews] = useState([]);
  const [dataModal,setDataModal] = useState([]);
  useEffect(() => {
    CommonAPIs.getGarageReviews(dataGarage?.id).then((res)=>
      {
        setListReviews(res)
        setLoading(false)
      }
    ).catch(error =>
      {
        setLoading(false)
      }
    )
  },[dataGarage?.id])
  const handleShowReviewsAll = (value) =>{
    setDataModal(value)
    setModalVisible(!modalVisible)
  }
  if(loading) return <Loading/>
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {listReviews?.length ==0?
        <Text style={styles.noReview}>Chưa có đánh giá</Text>:
        <View style={styles.info}>
          <View style={styles.rating}>
            <Rating
              type="star"
              startingValue={4.8}
              readonly
              imageSize={20}
              style={{paddingVertical: 10}}
            />
            <Text style={styles.countRating}>{dataGarage?.avg_rating}/5 ({dataGarage?.review_count} bình luận)</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonMoreRating}
            onPress={() => handleShowReviewsAll(dataGarage?.rating)}>
            <Icon name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>}
        <View style={styles.comment}>
          <TouchableOpacity
            style={styles.btnComment}
            onPress={() => navigation.navigate('WriteReview')}>
            <Text style={styles.textBtnComment}>Viết đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSort}>
            <Icon name="funnel" size={20} color="gray" />
            <Text style={styles.textBtnSort}>Mới nhất</Text>
            <Icon name="chevron-down-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        {listReviews.length !=0&&
        <View style={styles.listComment}>
          {listReviews.map((item, index) => (
            <View style={styles.itemComment} key={item.id}>
              <Avatar
                size={30}
                rounded
                source={{
                  uri: item?.user?.avatar,
                }}
                containerStyle={{backgroundColor: '#6733b9'}}
              />
              <View style={styles.infoComment}>
                <Text style={styles.nameComment}>{item.user?.name}</Text>
                <View style={styles.rating2}>
                  <Text style={styles.countRating2}>{item?.rating[0].rate}.0</Text>
                  <Rating
                    type="star"
                    startingValue={4.8}
                    readonly
                    imageSize={10}
                    style={{paddingVertical: 10}}
                  />
                  <TouchableOpacity
                    style={styles.buttonMoreRating2}
                    onPress={() => handleShowReviewsAll(item?.rating)}>
                    <Icon name="chevron-down-outline" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.contentComment}>
                  {item?.message}
                </Text>
                <View style={{
                  flexDirection:'row',
                  alignItems: 'center',
                  marginTop:5,
                  }}>
                  <Text style={styles.timeComment}>{format(parseISO(item?.time), "dd-MM-yyyy")}</Text>
                  <View style={styles.comments}>
                      <Icon name="chatbox-ellipses-outline" size={16} color="gray" />
                      <Text style={styles.countRating}>{item?.comments.length}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>}
      </ScrollView>
      {/* Modal */}
      <ShowModal modalVisible={modalVisible} setModalVisible={setModalVisible} dataModal={dataModal}/>
    </>
  );
};

export default Evaluate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noReview:{
    fontSize:16,
    color: '#000',
    textAlign: 'center',
    padding:10,
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
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 12,
    color: '#777',
     borderRightWidth:1,
    borderRightColor:'gray',
    marginRight: 10,
    paddingRight:10,
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
  // modalText: {
  //   color: 'black',
  // },
  // morePostContent: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   marginHorizontal: 20,
  //   backgroundColor: 'white',
  //   alignSelf: 'center',
  //   elevation: 5,
  //   borderRadius: 10,
  // },
  // titleModal: {
  //   padding: 16,
  //   backgroundColor: '#f9f9fb',
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   borderBottomWidth: 0.4,
  //   borderBottomColor: 'gray',
  // },
  // textTitleModal: {
  //   fontSize: 18,
  //   color: 'black',
  //   textAlign: 'center',
  // },
  // contentModal: {
  //   padding: 16,
  //   marginBottom: 10,
  // },
});
