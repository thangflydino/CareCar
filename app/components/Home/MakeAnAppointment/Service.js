import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React,{useState, useEffect} from 'react'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons'
const Service = ({listService,selected,setSelected}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [contentModal,setContentModal] = useState({})
  return (
    <View style={styles.container}>
      {
        listService.map((item,index)=>(
          <TouchableOpacity style={styles.item} key={item.name}
            onPress={() =>{
              setContentModal(item)
              setModalVisible(true)
            }}
          >
            <View style={{flex: 1}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}numberOfLines={1}>{item.description}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>{
                if(selected.indexOf(index)==-1)
                  setSelected([...selected,index])
                else setSelected(selected.filter(a=>a!=index))
              }}
            >
              <Icon name="chevron-down-circle" size={30} color={selected.indexOf(index)==-1?"gray":'red'}/>
            </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#fff',
        elevation: 3,
        padding:10,
        margin:10,
        marginBottom:0,
        borderRadius:10,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    color: 'black',
  },
  description:{
    fontSize:14,
    color: 'gray',
    marginRight:10,
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