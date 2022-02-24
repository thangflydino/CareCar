import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  PermissionsAndroid,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
const CallForHelp = () => {
  const [isInsurance, setIsInsurance] = useState(false);
  const [number, setNumber] = useState('')
  const [location, setLocation] = useState({
    latitude: 16.086846191804625,
    latitudeDelta: 0.009666684534803238,
    longitude: 108.21679534390569,
    longitudeDelta: 0.005002655088887309,
  });
  const onRegionChange = region => {
    setLocation(region);
  };
  useEffect(() => {
    // Geolocation.getCurrentPosition(info => {
    //               console.log(info.coords)
    //               Geocoder.init("AIzaSyA76Lbj_e81ko4jC77-4L4fLSwsF2qmmUU"); // use a valid API key
    //               Geocoder.from(41.89, 12.49)
    //               .then(json => {
    //               var addressComponent = json.results[0].address_components[0];
    //                 console.log(addressComponent);
    //               })
    //               .catch(error => console.warn(error));
    //             });
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 16.06613,
            longitude: 108.2411,
            latitudeDelta: 0.439158482,
            longitudeDelta: 0.2272421121,
          }}
          // region={location}
          onRegionChange={onRegionChange}>
          <Marker
            coordinate={{latitude: 16.06613, longitude: 108.2411}}
            // icon={{uri: 'https://keka-v2.herokuapp.com/img/default_user_banner.png'}}
            // image={{uri: 'https://keka-v2.herokuapp.com/img/default_gara_banner.png'}}
            title={'Nguyễn Hữu Thắng'}
            description={'Đà Nẵng'}
          />
        </MapView>
        <View style={styles.search}>
          <TouchableOpacity style={styles.inputSearch} onPress={() => {}}>
            <Icon name="search" size={24} color="gray" />
            <Text style={styles.textSearch}>Nhập để tìm kiếm ...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.phone}>
            {/* <Text style={styles.phoneText}>0900000009</Text> */}
            <TextInput
                style={styles.inputPhone}
                 onChangeText={setNumber}
                  value={number}
                  placeholder="Nhập số diện thoại"
                  keyboardType="numeric"
                />
            {number.length >0&&<TouchableOpacity style={styles.removePhone}
              onPress={() =>setNumber('')}
            >
              <Icon name="close-circle" size={20} color="gray" />
            </TouchableOpacity>}
          </View>
          <CheckBox
            center
            title="Xe có bảo hiểm"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={isInsurance}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
            onPress={() => setIsInsurance(!isInsurance)}
          />
          <TouchableOpacity style={styles.btnSendHelp}>
            <Text style={styles.textHelp}>Gửi yêu cầu cứu hộ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CallForHelp;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  mapStyle: {
    width: width,
    height: height,
  },
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'transparent',
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textSearch: {
    paddingHorizontal: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  phone: {
    padding: 10,
    marginTop:4,
    borderBottomWidth: 2,
    borderBottomColor: '#999',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  phoneText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  btnSendHelp: {
    marginVertical: 10,
    alignSelf: 'center',
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
  },
  textHelp: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 0,
    marginVertical: 20,
  },
  checkboxText: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputPhone:{
    padding:0,
    paddingHorizontal:10,
    fontSize: 16,
  },
  removePhone:{

  }
});
