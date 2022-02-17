import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from './Header'
import Icon from 'react-native-vector-icons/Ionicons'
import {Rating} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
const garage = [
  {
    id: 1,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 2,
    name: 'JP Long',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 3,
    name: 'AT Auto',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 4,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 5,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 6,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 7,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 8,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 9,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
  {
    id: 10,
    name: 'Shinwa Pro Garage',
    ratting: 4.5,
    comments: 10,
  },
]
const ChoiceGarage = () => {
  const navigation = useNavigation();
  const [valueSearch, setValueSearch] = useState('');
  return (
    <View style={styles.container}>
    <Header />
    <View style={styles.search}>
      <Icon name="ios-search" size={24} color="#a5a5a5" />
      <TextInput
        placeholder="Nhập để tìm kiếm"
        onChangeText={(text) => setValueSearch(text)}
        style={styles.input}
      />
    </View>
    <FlatList
        data={garage}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemGarage}
            onPress={() => navigation.navigate('MakeAnAppointment',{nameGarage:item.name})}
          >
            <Text style={styles.nameGarage}>{item.name}</Text>
            <View style={styles.evaluation}>
              <View style={styles.ratting}>
                <Text style={styles.countRating}>{item.ratting}</Text>
                <Rating
                  imageSize={16}
                  ratingCount={1}
                  startingValue={1}
                  readonly
                  style={{margin: 0, padding: 0}}
                />
              </View>
              <View style={styles.comments}>
                <Text style={styles.countRating}>{item.comments}</Text>
                <Icon name="chatbox-ellipses" size={16} color="red" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ChoiceGarage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  search:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    paddingHorizontal:10,
    paddingVertical: 4,
    borderRadius:10,
    margin:10,
  },
  input:{
    backgroundColor: '#e0e0e0',
    padding:0,
    fontSize:16,
    paddingLeft:10,
  },
  itemGarage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },
  nameGarage: {
    color: 'black',
    fontSize: 16,
  },
  evaluation:{
    flexDirection: 'row',
  },
  ratting: {
    alignItems: 'center',
  },
  countRating: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 5,
  },
})