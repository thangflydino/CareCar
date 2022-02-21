import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
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
  }
]

const SearchGarage = () => {
  const navigation = useNavigation();
  const [isGarage, setIsGarage] = useState(true);
  const [indexCarChoice, setIndexCarChoice] = useState(-1);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.choiceType}>
        <View style={styles.typeSearch}>
          <TouchableOpacity
            style={[styles.typeSearchItem, isGarage && styles.typeSearchItemOK]}
            onPress={() => setIsGarage(true)}>
            <Text
              style={[
                styles.typeSearchItemText,
                isGarage && styles.typeSearchItemTextOK,
              ]}>
              Garage
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeSearchItem,
              !isGarage && styles.typeSearchItemOK,
            ]}
            onPress={() => setIsGarage(false)}>
            <Text
              style={[
                styles.typeSearchItemText,
                !isGarage && styles.typeSearchItemTextOK,
              ]}>
              Dịch vụ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listCar}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) => (
            <Pressable 
              style={[styles.itemCar,(indexCarChoice==index)&&styles.itemCarChoice]}
                onPress={() => setIndexCarChoice(index)}
              >
              <Image
                source={{
                  uri: 'https://images6.alphacoders.com/102/1029037.jpg',
                }}
                style={styles.imageCar}
              />
              <Text style={styles.itemCarText}>Honda</Text>
            </Pressable>
          )}
          keyExtractor={item => item.toString()}
        />
        <Icon name={'chevron-forward-outline'} size={34} color={'red'} />
      </View>
      <FlatList
        data={garage}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemGarage}
            onPress={() =>navigation.navigate('DetailGarage')}>
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
  );
};

export default SearchGarage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  choiceType: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  typeSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
  },
  typeSearchItem: {
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
  },
  typeSearchItemOK: {
    backgroundColor: 'red',
  },
  typeSearchItemText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  typeSearchItemTextOK: {
    color: 'white',
  },
  listCar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderTopColor: '#d1d1d1',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  imageCar: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  itemCar: {
    alignItems:'center',
    padding: 10,
    marginHorizontal: 10,
  },
  itemCarChoice: {
    borderWidth:0.4,
    borderRadius: 10,
  },
  itemCarText: {
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
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
  comments: {
    alignItems: 'center',
  },
});
