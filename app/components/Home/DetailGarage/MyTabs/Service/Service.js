import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React,{useState, useEffect} from 'react'
import Modal from 'react-native-modal';
import Nodata from "./../../../../Components/Nodata";

const Service = ({services}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [contentModal,setContentModal] = useState({})
  const listService=[
    {
      name:'Chăm sóc xe',
      description:'- Rửa xe, rửa gầm, hút bụi Rửa xe, rửa gầm, hút bụi',
    },
    {
      name:'Sửa chữa bảo dưởng ô tô',
      description:'- Chẩn đoán, đọc, xóa lỗi ô tô thế hệ mới - Hệ thống phun xăng điện tử EFI, GDI - Sửa chữa, bảo dưỡng, đại tu Máy – Gầm – Điện - Điện - Điện lạnh - Hỗ trợ sửa chữa lưu động, sửa chữa tại nhà, cơ quan',
    },
    {
      name:'Đồng sơn ô tô',
      description:'- Gò, Hàn, Sơn ,phục hồi xe tai nạn. - Sơn La zăng. - Sơn chóe đèn ô tô. - Sơn đổi màu, sơn theo yêu cầu.',
    }
  ]
  return (
    <View style={styles.container}>
      { 
      services.length==0?<Nodata title={'Không có dịnh vụ nào'}/>:
        services.map((item,index)=>(
          <TouchableOpacity style={styles.item} key={item.name}
            onPress={() =>{
              setContentModal(item)
              setModalVisible(true)
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}numberOfLines={1}>{item.description}</Text>
          </TouchableOpacity>
        ))
      }
      {/* Modal */}
      <Modal transparent={true} visible={modalVisible} style={{ margin: 0 }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{flex: 1, backgroundColor: 'black', opacity: 0.6}}></Pressable>
        <View style={styles.morePostContent}>
          <View style={styles.titleModal}>
            <Text style={styles.textTitleModal}>{contentModal.name}</Text>
          </View>
          <View style={styles.contentModal}>
            <Text style={styles.textContentModal}
            >
              {contentModal.description}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  item:{
        margin: 10,
        marginVertical:5,
        backgroundColor: '#fff',
        elevation: 3,
        padding:10,
        borderRadius:10,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    color: 'black'
  },
  description:{
    fontSize:14,
    color: 'gray'
  },
  // modal
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