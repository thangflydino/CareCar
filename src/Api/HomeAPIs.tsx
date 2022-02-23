import axios from "axios";
// import UserModel from "../../model/UserModel";
// import AppManager from "../AppManager";
// import Constant from "../Constant";
// import StorageManager from '../StorageManager'

export default class HomeApis {

    static baseURL = 'https://keka-v2.herokuapp.com/api'

    static endpoints = {
        allGarages: HomeApis.baseURL + '/garages',
        allProvinces: HomeApis.baseURL + '/provinces?all=true',
        allDistricts: HomeApis.baseURL + '/districts?province=',
        garageByID:HomeApis.baseURL + '/user/garages/',
        garageReview:HomeApis.baseURL + '/garages/',
        searchGarage:HomeApis.baseURL + '/garages/',
    }

    static headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    static async getAllGarages() {
        try {
            let response = await axios.get(HomeApis.endpoints.allGarages, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async getAllProvinces() {
        try {
            let response = await axios.get(HomeApis.endpoints.allProvinces, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async getAllDistricts(id) {
        try {
            let response = await axios.get(`${HomeApis.endpoints.allDistricts}${id}`, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
     static async getGarageByID(idGarage) {
        try {
            let response = await axios.get(`${HomeApis.endpoints.garageByID}${idGarage}`, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
     static async getGarageReviews(idGarage) {
        try {
            let response = await axios.get(`${HomeApis.endpoints.garageReview}${idGarage}/reviews`, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async searchGarage(valueSearch) {
      const params ={
        keyword:valueSearch
      }
        try {
            let response = await axios.get(`${HomeApis.endpoints.searchGarage}`,{ params }, { headers: HomeApis.headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}