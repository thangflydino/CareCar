import AsyncStorage from '@react-native-async-storage/async-storage';
export default class StorageManager {


  static async getDataUser() {
        try {
        const jsonValue = await AsyncStorage.getItem('dataUser')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
  }
  static async setDataUser(value) {
      try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('dataUser', jsonValue)
        } catch (e) {
          // saving error
        }
  }

  static async logoutUser() {
      try {
          const jsonValue = JSON.stringify({})
          await AsyncStorage.setItem('dataUser', jsonValue)
        } catch (e) {
          // saving error
        }
  }

}
