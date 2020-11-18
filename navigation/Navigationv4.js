// import React from 'react';
// import { Platform } from 'react-native';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import { VARIABLES, COLORS } from '../constants/appConstants';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import SignUpScreen from '../screens/Auth/SignUpScreen';
// import MainScreen from '../screens/Main/MainScreen';
// import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen';
// import DetailsScreen from '../screens/Main/DetailsScreen';
// import CartScreen from '../screens/Main/CartScreen';
// import ProfileScreen from '../screens/Profile/ProfileScreen';
// import OrderScreen from '../screens/Orders/OrderScreen';
// import AddressScreen from '../screens/Addresses/AddressScreen';
// import CategoryScreen from '../screens/Categories/CategoriesScreen';
// import OrderDetailScreen from '../screens/Orders/OrderDetailsScreen';
// import CheckoutScreen from '../screens/Main/CheckoutScreen';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import Drawer from '../components/Drawer';
// import OrderCompleteScreen from '../screens/Main/OrderCompleteScreen';
// import AddNewAddressScreen from '../screens/Addresses/AddNewAddressScreen';




// const defaultNavOptions = {
//   headerStyles: {
//     backgroundColor: COLORS.OrangeWeb
//   },
//   headerTitleStyle: {
//       fontFamily:VARIABLES.myridProRegular
//   },
//   headerBackTitleStyle: {
//     fontFamily:VARIABLES.myridProRegular
//   },
//   headerTintColor: COLORS.OrangeWeb
// }



// const loginScreen = createStackNavigator({
//   Login: LoginScreen,
//   Forget: { screen: ForgetPasswordScreen, navigationOptions: { headerShown: true } },

// },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerShown: false,
//     }
//   });

// const orderDetail = createStackNavigator({
//   orderDetail: OrderDetailScreen,
// }, {
//   headerMode: 'none',
//   navigationOptions: {
//     headerShown: false,
//   }
// })

// const orderScreen = createStackNavigator({
//   Orders: OrderScreen,
//   OrderDetail: orderDetail
// }, {
//   navigationOptions: {
//     drawerIcon: drawerConfig => (
//       <Ionicons
//         name={Platform.OS === 'android' ? 'md-copy' : 'ios-copy'}
//         size={23}
//         color={COLORS.OrangeWeb}
//       />
//     )
//   }
// });

// const profileScreen = createStackNavigator({
//   Profile: ProfileScreen
// }, {
//   navigationOptions: {
//     drawerIcon: drawerConfig => (
//       <Ionicons
//         name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
//         size={23}
//         color={COLORS.OrangeWeb}
//       />
//     )
//   },
//   defaultNavigationOptions: defaultNavOptions,
// })
// const addressScreen = createStackNavigator({
//   Addresses: AddressScreen,
//   AddNewAddress: { screen: AddNewAddressScreen, navigationOptions: { headerShown: false } },

// }, {
//   navigationOptions: {
//     drawerIcon: drawerConfig => (
//       <Feather
//         name='map-pin'
//         size={23}
//         color={COLORS.OrangeWeb}
//       />
//     )
//   },
//   defaultNavigationOptions: defaultNavOptions,
// })


// const detailScreen = createStackNavigator({
//   Details: DetailsScreen
// },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerShown: false
//     }

//   })



// const signupScreen = createStackNavigator({
//   SignUp: SignUpScreen
// },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerShown: false,
//     }
//   }
// );
// const orderCompleteScreen = createStackNavigator({
//   compelete: OrderCompleteScreen
// },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerShown: false,
//     }
//   }
// );

// const AuthNavigator = createStackNavigator({
//   Login: loginScreen,
//   SignUp: signupScreen
// })

// const MainNavigator = createStackNavigator({
//   Home: MainScreen,
//   Details: detailScreen,
//   cart: CartScreen,
//   Checkout: CheckoutScreen,
//   Category: CategoryScreen,
//   Complete: orderCompleteScreen
// }, {
//   navigationOptions: {
//     drawerIcon: drawerConfig => (
//       <Ionicons
//         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//         size={23}
//         color={COLORS.OrangeWeb}
//       />
//     )
//   },
//   defaultNavigationOptions: defaultNavOptions
// }
// )

// const ShopNavigator = createDrawerNavigator({


//   Order: orderScreen,
//   Profile: profileScreen,
//   Addresses: addressScreen,
//   products: MainNavigator,


// }, {
//   initialRouteName: 'products',
//   contentComponent: Drawer,
//   drawerBackgroundColor: COLORS.white,
//   drawerType: 'slide',
//   overlayColor: '#00FFFFF',
//   contentOptions: {
//     activeTintColor: COLORS.OrangeWeb,
//   },
//   hideStatusBar: true,
// },

// )


// const AppNavigator = createSwitchNavigator({
//   Auth: AuthNavigator,
//   Main: ShopNavigator

// })




// export default createAppContainer(AppNavigator);




