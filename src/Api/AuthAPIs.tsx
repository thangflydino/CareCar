import axios from "axios";
// import UserModel from "../../model/UserModel";
// import AppManager from "../AppManager";
// import Constant from "../Constant";
// import StorageManager from '../StorageManager'

export default class AuthAPIs {

    static baseURL = 'https://keka-v2.herokuapp.com/api'

    static endpoints = {
        register: AuthAPIs.baseURL + '/register',
        login: AuthAPIs.baseURL + '/login',
        // verifyPhoneNumber: AuthAPIs.baseURL + '/verify-phone',
        updateProfile: AuthAPIs.baseURL + '/profile',
        // sendVerificationCode: AuthAPIs.baseURL + '/send-verification-code',
        // confirmPassword: AuthAPIs.baseURL + '/confirm-password',
        // sendVerificationCodeForgotPass: AuthAPIs.baseURL + '/forget-password/send',
        // verifyPhoneNumberForgotPass: AuthAPIs.baseURL + '/forget-password/verify',
        // resetPassword: AuthAPIs.baseURL + '/forget-password/reset',
    }

    static headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    static async login(phone: string, password: string) {
      console.log('a')
        try {
            const data = {
                phone,
                password
            }
            let response = await axios.post(AuthAPIs.endpoints.login, data, { headers: AuthAPIs.headers })
            // // let user = new UserModel(response.data)
            // // StorageManager.setData(Constant.key.currentUser, user.toDictionary())
            // // AppManager.shared.currentUser = user
            //  console.log('response.data',response.data)
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async register(phone: string,password: string,password_confirmation: string,name: string) {
        try {
            const data = {
                phone,password,password_confirmation,name
            }
            let response = await axios.post(AuthAPIs.endpoints.register, data, { headers: AuthAPIs.headers })
            // // // let user = new UserModel(response.data)
            // // // AppManager.shared.currentUser = user
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async updateProfile(data :object,dataUser:object){
        const data2 ={
          ...data,
          _method:'PUT'
        }
        const headers ={
          'Authorization':`Bearer ${dataUser.access_token}`,
          'Accept': 'application/json'
        }
        console.log('data2',data2,'dataUser',dataUser,'headers',headers)
        try {
            let response = await axios.post(AuthAPIs.endpoints.updateProfile, data2, { headers: headers})
            // // // let user = new UserModel(response.data)
            // // // AppManager.shared.currentUser = user
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

}