import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'fr';

const Appointment = ({dataGarage}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bạn có thể chọn ngày để đặt lịch hẹn với garage
      </Text>
      <View style={styles.tutorial}>
        <View style={styles.tutorialItem}>
          <View style={styles.tutorialItemIcon} />
          <Text style={styles.tutorialItemText}>Có thể đặt</Text>
        </View>
        <View style={styles.tutorialItem}>
          <View
            style={[styles.tutorialItemIcon, {backgroundColor: '#dbdbdb'}]}
          />
          <Text style={styles.tutorialItemText}>Hết chỗ</Text>
        </View>
      </View>
      <Calendar
        markedDates={{
          '2022-02-18': {
            selected: true,
            marked: true,
            selectedColor: '#d3f1f9',
            dotColor: 'transparent',
          },
          '2022-02-19': {
            selected: true,
            marked: true,
            selectedColor: '#d3f1f9',
            dotColor: 'transparent',
          },
          '2022-02-20': {
            selected: true,
            marked: true,
            selectedColor: '#d3f1f9',
            dotColor: 'transparent',
          },
          '2022-02-21': {
            selected: true,
            marked: true,
            selectedColor: '#d3f1f9',
            dotColor: 'transparent',
          },
        }}
        onDayPress={day => {
          navigation.navigate('MakeAnAppointment', {
            nameGarage: dataGarage.name,
            date: day.dateString,
          });
        }}
      />
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    padding: 10,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  tutorial: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tutorialItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tutorialItemIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#d9f7ff',
    borderRadius: 30,
  },
  tutorialItemText: {
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
  },
});
