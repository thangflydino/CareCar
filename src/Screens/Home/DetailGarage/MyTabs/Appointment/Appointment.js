import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Appointment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bạn có thể chọn ngày để đặt lịch hẹn với garage</Text>
      <View style={styles.tutorial}>
        <View style={styles.tutorialItem}>
          <View style={styles.tutorialItemIcon}/>
          <Text style={styles.tutorialItemText}>Có thể đặt</Text>
        </View>
        <View style={styles.tutorialItem}>
          <View style={[styles.tutorialItemIcon,{backgroundColor:'#dbdbdb'}]}/>
          <Text style={styles.tutorialItemText}>Hết chỗ</Text>
        </View>
      </View>
      <Calendar
        // Initially visible month. Default = now
        current={'2022-16-02'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-16-02'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2023-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        firstDay={1}
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        renderHeader={date => {
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    padding:10,
    fontSize:14,
    color: 'black',
    textAlign: 'center',
  },
  tutorial:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tutorialItem:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  tutorialItemIcon:{
    width:30,
    height:30,
    backgroundColor:'#d9f7ff',
    borderRadius:30,
  },
  tutorialItemText:{
    fontSize:16,
    marginLeft:5,
    color:'black',
  }
})