import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigation';
import AppNavigator from './navigation/AppNavigation';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import * as Font from 'expo-font'
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productReducer from './store/reducers/products';
import authReducer from './store/reducers/auth';
import orderReducer from './store/reducers/Orders';
import cartReducer from './store/reducers/cart';
import * as SplashScreen from 'expo-splash-screen'
import addressReducer from './store/reducers/address';

const rootReducer = combineReducers({
  productReducer: productReducer,
  auth: authReducer,
  order: orderReducer,
  cart: cartReducer,
  address: addressReducer


})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      return Font.loadAsync({
        'KhemerUI': require('./Fonts/KhmerUI.ttf'),
        'KhemerUIBold': require('./Fonts/KhmerUIb.ttf'),
        'myridProLight': require('./Fonts/MyriadPro-Light.ttf'),
        'myridProRegular': require('./Fonts/MyriadPro-Regular.ttf'),
        'myridProSemiBold': require('./Fonts/MyriadPro-Semibold.ttf'),
        'myridProBold': require('./Fonts/MyriadPro-Bold.ttf')
    
      })
    }
    async function prepareResources() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.log(error)
      }
      await SplashScreen.hideAsync()
      setFontLoaded(true)
    }
    fetchFonts()
    prepareResources()
  })
 



  if (!fontLoaded) {
    return null;
  }
  else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
