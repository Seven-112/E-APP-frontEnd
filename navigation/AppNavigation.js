import React from 'react';
import { AuthNavigator, ShopNavigator } from './Navigation';
import StartupScreen from '../screens/StartupScreen';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';




const AppNavigator = props => {

    const isAuth = useSelector(state => !!state.auth.token);
    const didTryAutoLogin = useSelector(state => !!state.auth.didTryAutoLogin);


    return <NavigationContainer>
        {isAuth && <ShopNavigator />}
        {!isAuth && didTryAutoLogin && <AuthNavigator />}
        {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
};

export default AppNavigator;




