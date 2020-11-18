import React from 'react';
import { Platform, ScrollView, View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { VARIABLES, COLORS } from '../constants/appConstants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import MainScreen, { screenOptions as MainScreenOptions } from '../screens/Main/MainScreen';
import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen';
import DetailsScreen from '../screens/Main/DetailsScreen';
import CartScreen, { screenOptions as CartScreenOptions } from '../screens/Main/CartScreen';
import ProfileScreen, { screenOptions as ProfileScreenOptions } from '../screens/Profile/ProfileScreen';
import OrderScreen, { screenOptions as OrderScreenOptions } from '../screens/Orders/OrderScreen';
import AddressScreen, { screenOptions as AddressScreenOptions } from '../screens/Addresses/AddressScreen';
import CategoryScreen from '../screens/Categories/CategoriesScreen';
import OrderDetailScreen from '../screens/Orders/OrderDetailsScreen';
import CheckoutScreen from '../screens/Main/CheckoutScreen';
import Drawer from '../components/Drawer';
import OrderCompleteScreen from '../screens/Main/OrderCompleteScreen';
import AddNewAddressScreen from '../screens/Addresses/AddNewAddressScreen';
import * as authActions from '../store/actions/auth';


const defaultNavOptions = {
  headerStyles: {
    backgroundColor: COLORS.OrangeWeb
  },
  headerTintColor: COLORS.OrangeWeb
}


const LoginStackNavigator = createStackNavigator();
export const LoginScreenNavigator = () => {
  return (
    <LoginStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <LoginStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
      <LoginStackNavigator.Screen
        name="Forget"
        component={ForgetPasswordScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
    </LoginStackNavigator.Navigator>
  )
}
const SignUpStackNavigator = createStackNavigator();
export const SignUpScreenNavigator = () => {
  return (
    <SignUpStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SignUpStackNavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}

      />
    </SignUpStackNavigator.Navigator>
  )
}



// const AuthNavigator = createStackNavigator({
//   Login: loginScreen,
//   SignUp: signupScreen
// })



// const orderDetail = createStackNavigator({
//   orderDetail: OrderDetailScreen,
// }, {
//   headerMode: 'none',
//   navigationOptions: {
//     headerShown: false,
//   }
// })

const OrderStackNavigator = createStackNavigator();
export const OrderNavigator = () => {
  return (
    <OrderStackNavigator.Navigator>
      <OrderStackNavigator.Screen
        name="Orders"
        component={OrderScreen}
        options={OrderScreenOptions}
      />
      <OrderStackNavigator.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
    </OrderStackNavigator.Navigator>
  )
}

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

const ProfileStackNavigator = createStackNavigator();
export const ProfileScreenNavigaor = () => {
  return (
    <ProfileStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={ProfileScreenOptions}
      />
    </ProfileStackNavigator.Navigator>
  )
}

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
const AddressStackNavigator = createStackNavigator();

export const AddressScreenNavigator = () => {
  return (
    <AddressStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AddressStackNavigator.Screen
        name="Addresses"
        component={AddressScreen}
        options={AddressScreenOptions}
      />
      <AddressStackNavigator.Screen
        name="AddNewAddress"
        component={AddNewAddressScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
    </AddressStackNavigator.Navigator>
  )
}

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



const OrderCompleteStackNavigator = createStackNavigator();

export const OrderCompleteScreenNavigator = () => {
  return (
    <OrderCompleteStackNavigator.Navigator>
      <OrderCompleteStackNavigator.Screen
        name="complete"
        component={OrderCompleteScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
    </OrderCompleteStackNavigator.Navigator>
  )
}


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

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={defaultNavOptions} >
      <MainStackNavigator.Screen
        name="Home"
        component={MainScreen}
        options={MainScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
      <MainStackNavigator.Screen
        name="cart"
        component={CartScreen}
        options={CartScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Checkout"
        component={CheckoutScreen}
      />
      <MainStackNavigator.Screen
        name="Category"
        component={CategoryScreen}
      />
      <MainStackNavigator.Screen
        name="Complete"
        component={OrderCompleteScreenNavigator}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />


    </MainStackNavigator.Navigator>
  )
}

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


// <ScrollView>
// <SafeAreaView>
//     <View style={styles.screen} >
//         <Card style={styles.profileContainer}>
//             <View style={styles.imageContainer}>
//                 <Image style={styles.image} source={{ uri: userData.profileImg }} />
//             </View>
//             <Text style={styles.text}>{userData.name ?? 'USMAN'}</Text>
//         </Card>
//         <View>
//             <DrawerItemList {...props} />
//         </View>
//         <TouchableOpacity onPress={() => {
//             props.navigation.navigate('Login')
//         }} style={styles.logoutContainer}>
//             <Ionicons
//                 style={styles.icon}
//                 name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
//                 size={23}
//                 color={COLORS.OrangeWeb}
//             />
//             <Text style={styles.logout}>Logout</Text>
//         </TouchableOpacity>
//     </View>
// </SafeAreaView>
// </ScrollView>



const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const userData = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <ShopDrawerNavigator.Navigator initialRouteName="PRODUCTS"

      drawerContent={
        props => {
          return (
            <ScrollView>
              <SafeAreaView>
                <View style={styles.screen} >
                  <Card style={styles.profileContainer}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{ uri: userData.profileImg }} />
                    </View>
                    <Text style={styles.text}>{userData.name ?? 'USMAN'}</Text>
                  </Card>
                  <View>
                    <DrawerItemList {...props} />
                  </View>
                  <TouchableOpacity onPress={() =>
                    dispatch(authActions.logout())
                  } style={styles.logoutContainer}>
                    <Ionicons
                      style={styles.icon}
                      name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                      size={23}
                      color={COLORS.OrangeWeb}
                    />
                    <Text style={styles.logout}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </ScrollView>

          )
        }
      }
      drawerContentOptions={{

        activeBackgroundColor: COLORS.white,
        activeTintColor: COLORS.OrangeWeb,
        inactiveBackgroundColor: COLORS.white,
        drawerBackgroundColor: COLORS.white,
        drawerType: 'front',
        overlayColor: '#00FFFFF',
        contentOptions: {
          activeTintColor: COLORS.OrangeWeb,
        },
        hideStatusBar: true,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="ORDER"
        component={OrderNavigator}
        options={{
          drawerIcon: drawerConfig => <Ionicons
            name={Platform.OS === 'android' ? 'md-copy' : 'ios-copy'}
            size={23}
            color={COLORS.OrangeWeb}
          />
          ,
          headerShown: false,
          headerMode: 'none',

        }}
      />
      <ShopDrawerNavigator.Screen
        name="PROFILE"
        component={ProfileScreenNavigaor}
        options={{
          drawerIcon: drawerConfig => <Ionicons
            name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
            size={23}
            color={COLORS.OrangeWeb}
          />

          ,

          headerShown: false,
          headerMode: 'none'
        }}
      />

      <ShopDrawerNavigator.Screen
        name="ADDRESS"
        component={AddressScreenNavigator}
        options={{
          drawerIcon: drawerConfig =>
            <Ionicons name="ios-map" size={24} color={COLORS.OrangeWeb} />
          ,
          headerShown: false,
          headerMode: 'none'

        }}
      />
      <ShopDrawerNavigator.Screen
        name="PRODUCTS"
        component={MainNavigator}
        options={{
          drawerIcon: drawerConfig => <Ionicons
            name={Platform.OS === 'android' ? 'md-copy' : 'ios-copy'}
            size={23}
            color={COLORS.OrangeWeb}
          />
          ,
          headerShown: false,
          headerMode: 'none'

        }}
      />

    </ShopDrawerNavigator.Navigator>
  )
}



const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Login"
        component={LoginScreenNavigator}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignUpScreenNavigator}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
    </AuthStackNavigator.Navigator>
  )
}

// SIGNUP_SCREEN:'SignUp',
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




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',

  },
  profileContainer: {
    padding: 30,
    backgroundColor: COLORS.OrangeWeb,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 5,
    borderColor: 'red',
    height: 150,
    alignItems: 'flex-start',

  },
  imageContainer: {
    borderColor: 'red',
    borderRadius: 40,
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    margin: 5,
    fontSize: 18,
    color: COLORS.DarkSienna,
    fontFamily: VARIABLES.myridProRegular
  },
  logoutContainer: {
    marginTop: '85%',
    height: 40,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  icon: {
    marginLeft: 20
  },
  logout: {
    marginLeft: 35,
    fontWeight: '600',
    fontFamily: VARIABLES.myridProSemiBold
  }
})
