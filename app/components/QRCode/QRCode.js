import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from "react-native";

const QRCode = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      Alert.alert('Thông báo', 'Quét thành công nhưng bị lỗi gì đó..')
    );
  };
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
                  showMarker={true} 
        topContent={
          <Text style={styles.centerText}>
            Quét mã QR để sử dụng combo rửa xe
          </Text>
        }
        topViewStyle={{height:0,padding:0}}
      />
    </View>
  )
}

export default QRCode
const  {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    // padding: 16
  }
});