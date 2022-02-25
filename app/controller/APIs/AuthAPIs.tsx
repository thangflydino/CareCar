import axios from 'axios';

export default class AuthAPIs {
  static baseURL = 'https://keka-v2.herokuapp.com/api';

  static endpoints = {
    register: AuthAPIs.baseURL + '/register',
    login: AuthAPIs.baseURL + '/login',

    updateProfile: AuthAPIs.baseURL + '/profile',
  };
  static headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  static async login(phone: string, password: string) {
    try {
      const data = {
        phone,
        password,
      };
      let response = await axios.post(AuthAPIs.endpoints.login, data, {
        headers: AuthAPIs.headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async register(
    phone: string,
    password: string,
    password_confirmation: string,
    name: string,
  ) {
    try {
      const data = {
        phone,
        password,
        password_confirmation,
        name,
      };
      let response = await axios.post(AuthAPIs.endpoints.register, data, {
        headers: AuthAPIs.headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  static async updateProfile(data, dataUser) {
    const data2 = {
      ...data,
      _method: 'PUT',
    };
    const headers = {
      Authorization: `Bearer ${dataUser.access_token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    try {
      let response = await axios.post(AuthAPIs.endpoints.updateProfile, data2, {
        headers: headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  static async updateAvatarProfile(data, dataUser) {
    const data2 = {
      ...data,
      _method: 'PUT',
    };
    const headers = {
      Authorization: `Bearer ${dataUser.access_token}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    try {
      let response = await axios.post(AuthAPIs.endpoints.updateProfile, data2, {
        headers: headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
