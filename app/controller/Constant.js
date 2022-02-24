import { Dimensions } from "react-native";

export default Constant = {
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        Welcome: 'Welcome',
        Login: 'Login',
        ForgotPassword: 'ForgotPassword',
        ConfirmPhoneNumber: 'ConfirmPhoneNumber',
        Register: 'Register',
        Home: 'Home',
        TabBar:'MyTabs',
        SearchGarage:'SearchGarage',
        DetailGarage:'DetailGarage',
        UpdateAddress:'UpdateAddress',
        UpdateName:'UpdateName',
        ChangePassword:'ChangePassword',
        WriteReview:'WriteReview',
        MakeAnAppointment:'MakeAnAppointment',
        ChoiceGarage:'ChoiceGarage',
        ChoiceDate:'ChoiceDate',
        ChoiceLocation:'ChoiceLocation',
        Message:'Message',
        CallForHelp:'CallForHelp',
        DetailVoucher:'DetailVoucher',
        Voucher:'Voucher',
        CarWash:'CarWash',
        ChoiceProvince:'ChoiceProvince',
        ChoiceDistrict:'ChoiceDistrict',
        DataSearch:'DataSearch',
    },
    color: {
        green: '#3FC44E',
        blue: '#00CEFF',
        link: '#3168FF',
        grayText: '#92929D',
        separator: '#d1d1d1',
        text: '#373737',
        buttonPrimary: '#00CEFF',
        plusPoint: '#3FC44E',
        minusPoint: '#4C4C4C'
    },
    icons: {
        logo: require('../assets/images/ic_logo.png'),
        nodata: require('../assets/images/img_nodata.jpg'),
    },
    fonts: {
        poppinsBold: 'Poppins-Bold',
        poppinsMedium: 'Poppins-Medium',
        poppinsRegular: 'Poppins-Regular',
        poppinsThin: 'Poppins-Thin',
        poppinsLight: 'Poppins-Light',
        poppinsSemiBold: 'Poppins-SemiBold',
    },
    dateFormatter: {
        ddMMMyyyy: 'dd MMM yyyy',
        yyyyMMddHHmm: 'yyyy-MM-dd HH:mm'
    },
    
}