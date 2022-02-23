import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import {Rating} from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HomeApis from './../../../Api/HomeAPIs';
import { Dimensions } from "react-native";
import Loading from "./../../../Components/Loading";

const DataSearch = ({route}) => {
  const valueSearch = route?.params?.valueSearch;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [listDataGarageSearch, setListDataGarageSearch] = useState([]);
  useEffect(() => {
    HomeApis.searchGarage(valueSearch).then(res => {
      setLoading(false)
      setListDataGarageSearch(res.data);
    });
  }, [valueSearch]);
  console.log('listDataGarageSearch',listDataGarageSearch)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={34} color="red" />
        </TouchableOpacity>
        <View style={styles.fromSearch} pointerEvents="none">
          <Icon name="search" size={24} color="gray" />
          <TextInput
            placeholder="Nhập tên garage hoặc dịch vụ"
            style={styles.input}
            value={valueSearch}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        {loading?<Loading/>:
          <View style={styles.listService}>
            {listDataGarageSearch.map((item, index) => (
              <TouchableOpacity style={styles.itemService} key={item.id}
                  onPress={() =>navigation.navigate('DetailGarage',{idGarage:item.id})}
                > 
                  <Image
                    style={styles.imageGarage}
                    source={{
                      uri:item.avatar,
                    }}
                  />
                  <Text style={styles.nameGarage}>{item.name}</Text>
                  <View style={styles.evaluation}>
                    <View style={styles.ratting}>
                      <Rating
                          imageSize={16}
                          ratingCount={1}
                          startingValue={1}
                          readonly
                          style={{margin:0,padding:0}}
                        />
                        <Text style={styles.countRating}>{item.avg_rating}</Text>
                    </View>
                    <View style={styles.comments}>
                      <Icon name="chatbox-ellipses" size={16} color="red" />
                      <Text style={styles.countRating}>{item.review_count}</Text>
                    </View>
                    <View style={styles.imageReviews}>
                      <Icon name="camera" size={16} color="red" />
                      <Text style={styles.countRating}>{item.review_images_count}</Text>
                    </View>
                  </View>
                  <View style={styles.address}>
                    <Icon name="location-outline" size={20} color="gray" />
                    <Text style={styles.textAddress} numberOfLines={2}>
                      {item.address} {item.district}
                    </Text>
                  </View>
              </TouchableOpacity>
            ))}
          </View>
        }
        </View>
      </View>
  );
};

export default DataSearch;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  //header:
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  fromSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingVertical: 6,
  },
  //h
  listService: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemService: {
    margin: 10,
    marginRight: 0,
    width: (width - 30) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageGarage: {
    width: (width - 30) / 2,
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameGarage: {
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  evaluation:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  ratting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countRating: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 5,
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageReviews: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  address: {
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 5,
  },
  textAddress:{
    color: 'black',
    fontSize: 12,
    marginRight: 5,
  }
});
