import {StyleSheet, Text, View, TouchableOpacity,Alert,FlatList,TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Service from "./../DetailGarage/MyTabs/Service/Service";
import {CheckBox} from 'react-native-elements';
const procedure = [
  {
    id: 1,
    title: 'Garage & lịch hẹn',
    count: 1,
  },
  {
    id: 2,
    title: 'Dịch vụ',
    count: 2,
  },
  {
    id: 3,
    title: 'Thông tin',
    count: 3,
  },
];
const time =['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00']
const MakeAnAppointment = ({route}) => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const garageName = route?.params?.nameGarage;
  const date = route?.params?.date;
  const [dateAppointment, setDateAppointment] = useState();
  const [timeAppointment, setTimeAppointment] = useState();
  const [name, setName] = useState('Nguyễn Văn A');
  const [phoneNumber, setPhoneNumber] = useState('0909999999');
  const [infoCar, setInfoCar] = useState('');
  const [numberCar, setNumberCar] = useState('');
  const [firstOrdering, setFirstOrdering] = useState(false);
  const handleOnNext = () => {
    switch (step) {
      case 1:
        if(!garageName)
          Alert.alert('Thông báo','Bạn chưa chọn garage');
        else if(!date)
          Alert.alert('Thông báo','Vui lòng chọn ngày hẹn');
        else if(!timeAppointment)
          Alert.alert('Thông báo','Vui lòng chọn giờ hẹn');
        else
          setStep(step + 1);
        break;
      case 2:
        setStep(step + 1);
        break;
      case 3:
        Alert.alert('Thông báo','Đặt lịch thành công')
        navigation.navigate('Home');
        break;
      default:
        break;
    }
  };
  const handleOnBack = () => {
    if (step != 1) setStep(step - 1);
  };
  const handleOnChoiceDate = () => {
    if(!garageName)
      Alert.alert('Thông báo','Vui lòng chọn Garage')
     else
     navigation.navigate('ChoiceDate',{nameGarage:garageName})
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.procedure}>
        {procedure.map((item,index) => (
          <View style={styles.procedureItem} key={item.id}>
            <View style={[styles.procedureItemCount,step>=index+1 &&styles.vRed]}>
              <Text style={styles.procedureItemCountText}>{item.count}</Text>
            </View>
            <Text style={[styles.procedureItemTitle,step>=index+1 &&styles.textRed]}>{item.title}</Text>
          </View>
        ))}
      </View>
      {step==1&&<View style={styles.content}>
        <TouchableOpacity style={styles.choiceGarage}
          onPress={() => navigation.navigate('ChoiceGarage')}>
        
          <Icon name="home" size={30} color="red" />
          <Text style={[styles.garageName,garageName&&{color:'black'}]}>{garageName||'Chọn garage'}</Text>
        </TouchableOpacity>
        <View style={styles.dateTitle}>
          <Icon name="calendar-outline" size={30} color="red" />
          <Text style={styles.titleDateText}>Ngày hẹn</Text>
        </View>
        <View style={styles.dateContent}>
          <Text style={styles.date}>
            {date|| 'Chưa chọn ngày hẹn'}
          </Text>
          <TouchableOpacity style={styles.choiceDate}
            onPress={() =>handleOnChoiceDate()}>
            <Text style={styles.choiceDateText}>Chọn ngày</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateTitle}>
          <Icon name="time" size={30} color="red" />
          <Text style={styles.titleDateText}>Giờ hẹn</Text>
        </View>
        {date&&<View>
          <FlatList
          data={time}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity style={[styles.itemTime,timeAppointment==item&&styles.vRed]}
              onPress={() => setTimeAppointment(item)}>
              <Text style={[styles.timeText,timeAppointment==item&&styles.textWhite]}>{item}</Text>
              </TouchableOpacity>
          )}
          keyExtractor={item => item}
        />
        </View>}
      </View>}
      {step==2&&<View style={styles.content}>
        <View style={styles.search}>
          <Icon name="ios-search" size={24} color="#a5a5a5" />
          <TextInput
            placeholder="Nhập để tìm kiếm"
            onChangeText={(text) => setValueSearch(text)}
            style={styles.input}
          />
        </View>
        <Service/>
      </View>}
      {step==3&&<View style={styles.content}>
        <View style={styles.formInput}>
          <Icon name="ios-person" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Họ và tên"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.formInput}>
          <Icon name="call" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.formInput}>
          <Icon name="car" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Thông tin xe(tên xe, năm sản xuất..."
            value={infoCar}
            onChangeText={(text) => setInfoCar(text)}
            numberOfLines={1}
          />
        </View>
        <View style={styles.formInput}>
          <Icon name="pricetag" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Biển số xe"
            value={numberCar}
            onChangeText={(text) => setNumberCar(text)}
            numberOfLines={1}
          />
        </View>
        <View style={styles.formInput}>
          <Icon name="reader-outline" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Số khung xe"
            value={numberCar}
            onChangeText={(text) => setNumberCar(text)}
            numberOfLines={1}
          />
        </View>
        <View style={styles.formInput}>
          <Icon name="information-circle" size={24} color="red" />
          <TextInput style={styles.input2}
            placeholder="Thông tin thêm"
            value={numberCar}
            onChangeText={(text) => setNumberCar(text)}
            numberOfLines={1}
          />
        </View>
        <CheckBox
                center
                title="Lần đầu đặt lịch tại CareCar"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={firstOrdering}
                containerStyle={styles.checkboxContainer}
                onPress={() => setFirstOrdering(!firstOrdering)}
              />
      </View>}
      <View style={styles.footer}>
        {step != 1 ? (
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => handleOnBack()}>
            <Text style={styles.footerButtonText}>Quay lại</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => handleOnNext()}>
          <Text style={styles.footerButtonText}>
            {step != 3 ? 'Tiếp' : 'Xong'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakeAnAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  procedure: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  procedureItem: {
    alignItems: 'center',
    flex: 1,
  },
  procedureItemCount: {
    width: 36,
    height: 36,
    backgroundColor: '#808080',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vRed: {
    backgroundColor: 'red',
  },
  textRed: {
    color: 'red',
  },
  textWhite: {
    color: 'white',
  },
  procedureItemCountText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  procedureItemTitle: {
    fontSize: 14,
    color: '#808080',
    marginTop: 10,
  },
  content: {
    flex: 1,
  },
  choiceGarage: {
    margin: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  garageName: {
    fontSize: 18,
    marginLeft: 10,
    color: '#808080',
  },
  dateTitle: {
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDateText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  dateContent: {
    marginHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 18,
    color: 'black',
  },
  choiceDate: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  choiceDateText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
  },
  footerButton: {
    padding: 10,
    minWidth: 100,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  itemTime:{
    padding: 10,
    paddingVertical: 8,
    borderRadius: 10,
    margin:10,
    marginRight: 0,
    backgroundColor: 'white',
    elevation: 2,
  },
  timeText:{
    fontSize: 16,
    color: 'black',
  },
  //step2
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
  //step3
  formInput:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  input2:{
    flex:1,
    backgroundColor: '#fff',
    padding:0,
    fontSize:16,
    paddingLeft:10,
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 0,
  },
});
