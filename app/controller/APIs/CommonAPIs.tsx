import axios from 'axios';

export default class CommonAPIs {
  static baseURL = 'https://keka-v2.herokuapp.com/api';

  static endpoints = {
    allGarages: CommonAPIs.baseURL + '/garages',
    allProvinces: CommonAPIs.baseURL + '/provinces?all=true',
    allDistricts: CommonAPIs.baseURL + '/districts?province=',
    garageByID: CommonAPIs.baseURL + '/user/garages/',
    garageReview: CommonAPIs.baseURL + '/garages/',
    searchGarage: CommonAPIs.baseURL + '/garages/',
  };

  static headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  static async getAllGarages() {
    try {
      let response = await axios.get(CommonAPIs.endpoints.allGarages, {
        headers: CommonAPIs.headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getAllProvinces() {
    try {
      let response = await axios.get(CommonAPIs.endpoints.allProvinces, {
        headers: CommonAPIs.headers,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getAllDistricts(id) {
    try {
      let response = await axios.get(
        `${CommonAPIs.endpoints.allDistricts}${id}`,
        {headers: CommonAPIs.headers},
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getGarageByID(idGarage) {
    try {
      let response = await axios.get(
        `${CommonAPIs.endpoints.garageByID}${idGarage}`,
        {headers: CommonAPIs.headers},
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getGarageReviews(idGarage) {
    try {
      let response = await axios.get(
        `${CommonAPIs.endpoints.garageReview}${idGarage}/reviews`,
        {headers: CommonAPIs.headers},
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async searchGarage(valueSearch) {
    const params = {
      keyword: valueSearch,
    };
    try {
      let response = await axios.get(
        `${CommonAPIs.endpoints.searchGarage}`,
        {params},
        {headers: CommonAPIs.headers},
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
