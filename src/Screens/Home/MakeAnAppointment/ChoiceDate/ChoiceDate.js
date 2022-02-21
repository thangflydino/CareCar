import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
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

const ChoiceDate = ({route}) => {
  const nameGarage = route?.params?.nameGarage;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2022-02-18': {selected: true, marked: true, selectedColor: '#d3f1f9',dotColor: 'transparent'},
          '2022-02-19': {selected: true, marked: true, selectedColor: '#d3f1f9',dotColor: 'transparent'},
          '2022-02-20': {selected: true, marked: true, selectedColor: '#d3f1f9',dotColor: 'transparent'},
          '2022-02-21': {selected: true, marked: true, selectedColor: '#d3f1f9',dotColor: 'transparent'},
          '2022-02-22': {disableTouchEvent: true},
        }}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={day => {
          navigation.navigate('MakeAnAppointment',{nameGarage:nameGarage,date:day.dateString})
      }}
      />
    </View>
  );
};

export default ChoiceDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
