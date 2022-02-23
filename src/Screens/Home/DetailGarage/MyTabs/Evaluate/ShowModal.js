import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react'
import Modal from 'react-native-modal';
import {Rating} from 'react-native-elements';
const ShowModal = ({modalVisible,setModalVisible,dataModal}) => {
  return (
    <Modal transparent={true} visible={modalVisible} style={{ margin: 0 }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{flex: 1, backgroundColor: 'black', opacity: 0.4}}></Pressable>
        <View style={styles.morePostContent}>
          <View style={styles.titleModal}>
            <Text style={styles.textTitleModal}>Đánh giá</Text>
          </View>
          <View style={styles.contentModal}>
            {dataModal?.map((item, index) => (
              <View
                style={[
                  styles.rating,
                  {
                    justifyContent: 'space-between',
                  },
                ]}
                key={index}>
                <Text
                  style={[styles.nameRating, {width: '40%'}]}
                  numberOfLines={2}>
                  {item?.standard}
                </Text>
                <Rating
                  type="star"
                  startingValue={item?.rate}
                  readonly
                  imageSize={20}
                  style={{paddingVertical: 10}}
                />
                <Text style={styles.countRating}>{item?.rate}</Text>
              </View>
            ))}
          </View>
        </View>
      </Modal>
  )
}

export default ShowModal 
const styles = StyleSheet.create({
  // modal
    rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countRating2: {
    fontSize: 14,
    marginRight: 4,
  },
  modalText: {
    color: 'black',
  },
  morePostContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginHorizontal: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  titleModal: {
    padding: 16,
    backgroundColor: '#f9f9fb',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
  },
  textTitleModal: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  contentModal: {
    padding: 16,
    marginBottom: 10,
  },
})